// src/commands/theming.js
const fs = require('fs');
const path = require('path');

function setupTheming(projectPath) {
  console.log('Setting up theming configuration...');

  // Define a basic theme configuration
  const themeConfig = `const theme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#ffffff",
    text: "#333333"
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px"
  }
};

export default theme;
`;

  // Ensure the project has a src folder
  const srcPath = path.join(projectPath, 'src');
  if (!fs.existsSync(srcPath)) {
    fs.mkdirSync(srcPath);
  }

  // Write the theme configuration to a file
  fs.writeFileSync(path.join(srcPath, 'theme.js'), themeConfig);
  console.log('Theming configuration created at src/theme.js');
}

module.exports = setupTheming;