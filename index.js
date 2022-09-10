// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
        Message: 'Enter tests',
    }, 
    {
        type: 'list',
        name: 'license',
        Message: 'Select your license',
        choices: ['Open Source Software License', 'Public Domain License', 'Permissive License', 'Restrictive License',
                    'LGPL', 'Proprietary Software License'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
