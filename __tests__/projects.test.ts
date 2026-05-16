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
  });

  describe('saveProjects', () => {
    it('should save projects to projects.json', () => {
      saveProjects(tempDir, ['packages/foo', 'packages/bar']);
      const cgDir = path.join(tempDir, '.codegraph');
      const content = fs.readFileSync(path.join(cgDir, PROJECTS_FILENAME), 'utf-8');
      expect(JSON.parse(content)).toEqual(['packages/foo', 'packages/bar']);
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
      expect(result).toEqual(['packages/foo', 'packages/bar']);
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
      expect(result.sort()).toEqual(['packages/bar', 'packages/foo']);
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
