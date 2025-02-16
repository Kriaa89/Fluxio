const fs = require('fs');
const path = require('path');

function createNewProject(projectName) {
    console.log(`Creating a new Fluxio project: ${projectName}...`);

    const projectPath = path.join(process.cwd(), projectName);

  // Check if the project directory already exists
    if (fs.existsSync(projectPath)) {
        console.error(`Error: Directory "${projectName}" already exists.`);
        process.exit(1);
    }

  // Create the project directory
    fs.mkdirSync(projectPath);

  // Write a basic README file
    const readmeContent = `# ${projectName}\n\nThis is a Fluxio project scaffolded using the Fluxio CLI.`;
    fs.writeFileSync(path.join(projectPath, 'README.md'), readmeContent);

  // Create a basic package.json for the new project
    const packageJsonContent = {
    name: projectName,
    version: "0.1.0",
    scripts: {
        start: "fluxio start"
    },
    dependencies: {}
    };
    fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJsonContent, null, 2)
    );

    console.log(`Project "${projectName}" created successfully!`);
}

module.exports = createNewProject;
