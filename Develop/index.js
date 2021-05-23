const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// things to include 
// 1. Title 
// 2. Description
// 3. Table of Contents
// 4. Installation
// 5. Useage
// 6. Licence (selection)
// 7. Cntributing
// 8. Tests
// 9. Questions
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title: ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description: ',
        },
        {
            type: 'intput',
            name: 'installation',
            message: 'Installation Instructions: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use: ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose how you want to license your project: ',
            choices: ['gpl','gpl-2.0','gpl-3.0','lgpl','lgpl-2.1','lgpl-3.0','isc','lppl-1.3c','ms-pl','mit','mpl-2.0','osl-3.0','postgresql','ofl-1.1','ncsa','unlicense','zlib',]
        },
        {
            type: 'input',
            name: 'test',
            message: 'Test instructions: ',
        },
        {
            type: 'input',
            name: 'git',
            message: 'Git username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email adress: ',
        }
    ])
    .then((answers) => {
        fs.writeFile('ReadMe.md',
        `# ${answers.title}
[![Generic badge](https://img.shields.io/badge/License-${answers.license}-green.svg)](https://shields.io)
## Description <a name="description"></a>

${answers.description}

## Table of Content
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Test Instructions](#test)
5. [Questions](#questions)
6. [Licencse](#license)

## installation Instructions <a name="installation"></a>
${answers.installation}
## Usage <a name="usage"></a>
${answers.usage}
## Test Instructions <a name="test"></a>
${answers.test}
## Questions <a name="questions"></a>
**If You have any questions you may contact me below:**
- [Git Hub](https://github.com/${answers.git})
- My Email: ${answers.email}

## License <a name="license"></a>
The license information on the ${answers.license} license can be found here: [License Information](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository)`,
         (err) =>
         err ? console.error(err) : console.log('Success!'));
    })
};


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();
