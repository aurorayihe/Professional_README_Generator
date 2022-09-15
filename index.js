const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// A array of questions for user input
const questions = [
    {
        type: 'input',
        name:'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description',
    },
    {
        type: 'input',
        name: 'instal',
        message: 'Enter installation instruction',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'test',
        Message: 'How to run your application test?',
    }, 
    {
        type: 'list',
        name: 'license',
        Message: 'Select your license',
        choices: ['BSD', 'CC0', 'ISC', 'MIT','LGPL'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
    err ? console.log('wrong!') : console.log('Great!'));
}

// A function to initialize app
function init() {
    inquirer
        .prompt (questions)
        .then((answers) => {
            const readmeData = generateMarkdown(answers);
            writeToFile("README.md", readmeData);
        })
}

// Function call to initialize app
init();
