const { program } = require('commander');
const createNewProject = require('./commands/new');

program
  .version('1.0.0')
  .description('Fluxio CLI - An all-in-one UI framework scaffolding tool');

// "new" command to scaffold a new project
program
  .command('new <projectName>')
  .description('Scaffold a new Fluxio project')
  .action((projectName) => {
    createNewProject(projectName);
  });

// "routing" command to add routing configuration
program
  .command('routing <projectPath>')
  .description('Add routing configuration to your Fluxio project')
  .action((projectPath) => {
    const setupRouting = require('./commands/routing');
    setupRouting(projectPath);
  });

// "theme" command to add basic theming
program
  .command('theme <projectPath>')
  .description('Add basic theming configuration to your Fluxio project')
  .action((projectPath) => {
    const setupTheming = require('./commands/theming');
    setupTheming(projectPath);
  });

// "component" command to scaffold a new UI component
program
  .command('component <componentName>')
  .description('Generate a new UI component file in src/components')
  .action((componentName) => {
    const createComponent = require('./commands/component');
    createComponent(componentName);
  });

// Parse the CLI arguments
program.parse(process.argv);