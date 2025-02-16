const fs = require('fs');
const path = require('path');
const createNewProject = require('../src/commands/new');

describe('Fluxio New Command', () => {
  const testProjectName = 'test-project';
  const testProjectPath = path.join(process.cwd(), testProjectName);

  afterAll(() => {
    // Cleanup: remove the test project directory
    if (fs.existsSync(testProjectPath)) {
      fs.rmdirSync(testProjectPath, { recursive: true });
    }
  });

  it('should create a new project directory with basic files', () => {
    createNewProject(testProjectName);
    expect(fs.existsSync(testProjectPath)).toBe(true);
    expect(fs.existsSync(path.join(testProjectPath, 'README.md'))).toBe(true);
    expect(fs.existsSync(path.join(testProjectPath, 'package.json'))).toBe(true);
  });
});
