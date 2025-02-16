const fs = require('fs');
const path = require('path');

function createComponent(componentName) {
  const componentFileName = `${componentName}.jsx`;
  const componentContent = `import React from 'react';

const ${componentName} = (props) => {
  return (
    <div>
      <h1>${componentName} Component</h1>
      {/* Add your component code here */}
    </div>
  );
};

export default ${componentName};
`;

  // Ensure the components directory exists
  const componentsDir = path.join(process.cwd(), 'src', 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  // Create the component file
  const filePath = path.join(componentsDir, componentFileName);
  fs.writeFileSync(filePath, componentContent);
  console.log(`Component "${componentName}" created successfully at ${filePath}`);
}

module.exports = createComponent;
