import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import {
  PROJECTS_FILENAME,
  getProjectsPath,
  loadProjects,
  saveProjects,
  addProject,
  removeProject,
  scanForProjects,
  syncProjects,
} from '../src/projects';
import { CodeGraph } from '../src';

function createTempDir(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'monorepo-test-'));
}

function cleanupTempDir(dir: string): void {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function createProject(root: string, sub: string): void {
  const dir = path.join(root, sub);
  fs.mkdirSync(dir, { recursive: true });
  // Create a minimal .codegraph/codegraph.db to satisfy isInitialized()
  const cgDir = path.join(dir, '.codegraph');
  fs.mkdirSync(cgDir, { recursive: true });
  fs.writeFileSync(path.join(cgDir, 'codegraph.db'), '', 'utf-8');
}

describe('Projects Registry', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = createTempDir();
  });

  afterEach(() => {
    cleanupTempDir(tempDir);
  });

  describe('getProjectsPath', () => {
    it('should return correct path to projects.json', () => {
      expect(getProjectsPath(tempDir)).toBe(
        path.join(tempDir, '.codegraph', 'projects.json')
      );
    });
  });

  describe('loadProjects', () => {
    it('should return empty array when projects.json does not exist', () => {
      const result = loadProjects(tempDir);
      expect(result).toEqual([]);
    });

    it('should return empty array when projects.json has invalid JSON', () => {
      const cgDir = path.join(tempDir, '.codegraph');
      fs.mkdirSync(cgDir, { recursive: true });
      fs.writeFileSync(path.join(cgDir, PROJECTS_FILENAME), 'not json', 'utf-8');
      const result = loadProjects(tempDir);
      expect(result).toEqual([]);
    });

    it('should load projects from projects.json', () => {
      const cgDir = path.join(tempDir, '.codegraph');
      fs.mkdirSync(cgDir, { recursive: true });
      fs.writeFileSync(
        path.join(cgDir, PROJECTS_FILENAME),
        JSON.stringify(['packages/foo', 'packages/bar']),
        'utf-8'
      );
      const result = loadProjects(tempDir);
      expect(result).toEqual(['packages/foo', 'packages/bar']);
    });

    it('should filter non-string entries', () => {
      const cgDir = path.join(tempDir, '.codegraph');
      fs.mkdirSync(cgDir, { recursive: true });
      fs.writeFileSync(
        path.join(cgDir, PROJECTS_FILENAME),
        JSON.stringify(['valid', 42, null, { bad: true }]),
        'utf-8'
      );
      const result = loadProjects(tempDir);
      expect(result).toEqual(['valid']);
    });
  });

  describe('saveProjects', () => {
    it('should save projects to projects.json', () => {
      saveProjects(tempDir, ['packages/bar', 'packages/foo']);
      const cgDir = path.join(tempDir, '.codegraph');
      const content = fs.readFileSync(path.join(cgDir, PROJECTS_FILENAME), 'utf-8');
      expect(JSON.parse(content)).toEqual(['packages/bar', 'packages/foo']);
    });

    it('should write atomically (temp file + rename)', () => {
      saveProjects(tempDir, ['packages/foo']);
      const cgDir = path.join(tempDir, '.codegraph');
      // No .tmp file should remain after write
      const files = fs.readdirSync(cgDir);
      expect(files.filter(f => f.endsWith('.tmp'))).toEqual([]);
    });
  });

  describe('addProject', () => {
    it('should add a project to the registry', () => {
      const result = addProject(tempDir, 'packages/foo');
      expect(result).toEqual(['packages/foo']);
      // Verify persisted
      expect(loadProjects(tempDir)).toEqual(['packages/foo']);
    });

    it('should deduplicate when adding existing project', () => {
      addProject(tempDir, 'packages/foo');
      const result = addProject(tempDir, 'packages/foo');
      expect(result).toEqual(['packages/foo']);
    });

    it('should append to existing projects', () => {
      addProject(tempDir, 'packages/foo');
      const result = addProject(tempDir, 'packages/bar');
      // Return value preserves insertion order; file on disk is sorted
      expect(result).toContain('packages/foo');
      expect(result).toContain('packages/bar');
    });
  });

  describe('removeProject', () => {
    it('should remove a project from the registry', () => {
      addProject(tempDir, 'packages/foo');
      addProject(tempDir, 'packages/bar');
      const result = removeProject(tempDir, 'packages/foo');
      expect(result).toEqual(['packages/bar']);
    });

    it('should do nothing when removing non-existent project', () => {
      addProject(tempDir, 'packages/foo');
      const result = removeProject(tempDir, 'packages/nonexistent');
      expect(result).toEqual(['packages/foo']);
    });
  });

  describe('scanForProjects', () => {
    it('should discover initialized sub-projects', () => {
      createProject(tempDir, 'packages/foo');
      createProject(tempDir, 'packages/bar');
      const result = scanForProjects(tempDir);
      expect(result).toEqual(['packages/bar', 'packages/foo']);
    });

    it('should respect maxDepth', () => {
      createProject(tempDir, 'packages/foo');
      createProject(tempDir, 'packages/group/deep');
      const result = scanForProjects(tempDir, 1);
      expect(result).toEqual(['packages/foo']);
    });

    it('should skip .codegraph/, .git/, node_modules/', () => {
      createProject(tempDir, '.codegraph'); // <-- inside root .codegraph
      createProject(tempDir, 'node_modules/pkg');
      createProject(tempDir, '.git/hooks');
      createProject(tempDir, 'packages/real');
      const result = scanForProjects(tempDir);
      expect(result).toEqual(['packages/real']);
    });

    it('should return empty array when no sub-projects exist', () => {
      const result = scanForProjects(tempDir);
      expect(result).toEqual([]);
    });
  });

  describe('syncProjects', () => {
    it('should merge discovered projects with existing registry', () => {
      // Pre-register a project that scan will not find
      addProject(tempDir, 'legacy/manual');
      // Create discoverable projects
      createProject(tempDir, 'packages/foo');
      const result = syncProjects(tempDir);
      expect(result).toContain('legacy/manual');
      expect(result).toContain('packages/foo');
    });
  });
});

// ───────────────────────────────────────────────────────
// Integration tests — these go AFTER the existing tests
// ───────────────────────────────────────────────────────

describe('Monorepo Integration', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'monorepo-int-'));
  });

  afterEach(() => {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('should init sub-projects and register them', () => {
    // Create monorepo structure
    const packagesFoo = path.join(tempDir, 'packages/foo');
    const packagesBar = path.join(tempDir, 'packages/bar');
    fs.mkdirSync(packagesFoo, { recursive: true });
    fs.mkdirSync(packagesBar, { recursive: true });

    // Init root project
    const rootCg = CodeGraph.initSync(tempDir);
    rootCg.close();

    // Init sub-projects
    const fooCg = CodeGraph.initSync(packagesFoo);
    fooCg.close();
    const barCg = CodeGraph.initSync(packagesBar);
    barCg.close();

    // Register sub-projects
    addProject(tempDir, 'packages/foo');
    addProject(tempDir, 'packages/bar');

    // Verify
    const projects = loadProjects(tempDir);
    expect(projects).toContain('packages/foo');
    expect(projects).toContain('packages/bar');
  });

  it('scanForProjects should find sub-projects created after init', () => {
    // Init root
    const rootCg = CodeGraph.initSync(tempDir);
    rootCg.close();

    // No sub-projects yet
    expect(scanForProjects(tempDir)).toEqual([]);

    // Create and init a sub-project
    const sub = path.join(tempDir, 'packages/new');
    fs.mkdirSync(sub, { recursive: true });
    const subCg = CodeGraph.initSync(sub);
    subCg.close();

    // Scan should find it
    const found = scanForProjects(tempDir);
    expect(found).toContain('packages/new');
  });

  it('syncProjects preserves manually added projects during scan', () => {
    // Init root
    const rootCg = CodeGraph.initSync(tempDir);
    rootCg.close();

    // Add a manual entry (that won't be found by scan)
    addProject(tempDir, 'manual/pkg');
    // Create and init an auto-discoverable project
    const sub = path.join(tempDir, 'packages/auto');
    fs.mkdirSync(sub, { recursive: true });
    const subCg = CodeGraph.initSync(sub);
    subCg.close();

    // sync
    const merged = syncProjects(tempDir);
    expect(merged).toContain('manual/pkg');
    expect(merged).toContain('packages/auto');
  });

  it('should handle project add/remove lifecycle', () => {
    const rootCg = CodeGraph.initSync(tempDir);
    rootCg.close();

    addProject(tempDir, 'packages/foo');
    expect(loadProjects(tempDir)).toEqual(['packages/foo']);

    removeProject(tempDir, 'packages/foo');
    expect(loadProjects(tempDir)).toEqual([]);
  });

  it('should handle corrupted projects.json gracefully', () => {
    const cgDir = path.join(tempDir, '.codegraph');
    fs.mkdirSync(cgDir, { recursive: true });
    fs.writeFileSync(path.join(cgDir, 'projects.json'), '{broken json', 'utf-8');

    const result = loadProjects(tempDir);
    expect(result).toEqual([]);
  });
});
