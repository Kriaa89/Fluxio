const { program } = require('commander');
const createNewProject = require('./commands/new');

program
    .version('1.0.0')
    .description('Fluxio CLI - An all-in-one UI framework scaffolding tool');

// Command: new
program
    .command('new <projectName>')
    .description('Scaffold a new Fluxio project')
    .action((projectName) => {
        createNewProject(projectName);
    });

// Parse the CLI arguments
program.parse(process.argv);