// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

const generateReadme = ({ title, description, install, usage, license, contribute, test, github, email}) =>
    `#${title}
   ## Table of contents
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributing](#Contributing)
  -[Tests](#Tests)
  -[Questions](#Questions)
  ## Description
  ${description}
  ## Installation
  ${install}
  ## Usage
  ${usage}
  ## License
  ${license}
  ## Contributing
  ${contribute}
  ## Tests
  ${test}
  ## Questions
  If you have any additional questions, you can reach me in github at: ${github}, or via email at: ${email}
  `
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
        message: 'Which license will your application use?',
        name: 'license',
        choices: ['Apache 2.0', 'GNU General', 'GNU Lesser', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero', 'Eclipse', 'Mozilla', 'The Unlicense'],
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
const readmePageContent = generateReadme(answers);
fs.writeFile('README.md', readmePageContent, (err)=>
    err ? console.log(err): console.log ('Successfully created README.md'))
})

function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
