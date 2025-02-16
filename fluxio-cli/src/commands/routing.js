// src/commands/routing.js
const fs = require('fs');
const path = require('path');

function setupRouting(projectPath) {
    console.log('Setting up routing configuration...');

// Define a basic routing configuration as a starting point
    const routingConfig = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add more routes here */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
`;

// Ensure the project has a src folder
const srcPath = path.join(projectPath, 'src');
    if (!fs.existsSync(srcPath)) {
    fs.mkdirSync(srcPath);
}

// Write the routing configuration to a file
    fs.writeFileSync(path.join(srcPath, 'routes.js'), routingConfig);
    console.log('Routing configuration created at src/routes.js');
}

module.exports = setupRouting;
