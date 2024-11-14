// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your application. What is it for?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'How do you install this application?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Which license is your application covered under?',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
      },
      {
        type: 'input',
        message: 'How can a user make contributions to this application?',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'What are the test instructions for your application?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
  ])

// TODO: Create a function to write README file
.then ((answers) => {
const readmePageContent = generateMarkdown(answers);
fs.writeFile('autoREADME.md', readmePageContent, (err)=>
    err ? console.log(err): console.log ('Successfully created README.md'))
})


function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
