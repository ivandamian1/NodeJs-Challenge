// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return '![License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPLv3':
        return '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache 2.0':
        return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'None':
        return '';
    default:
        return '';}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
        return 'https://opensource.org/licenses/MIT';
    case 'GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache 2.0':
        return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'None':
        return ''; // No link if no license is chosen
    default:
        return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
        return 'This application is covered under the MIT License.';
    case 'GPLv3':
        return 'This application is covered under the GNU General Public License v3.0.';
    case 'Apache 2.0':
        return 'This application is covered under the Apache License 2.0.';
    case 'None':
        return 'This application is not covered under any specific license.';
    default:
        return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license)
  const licenseNotice = renderLicenseSection(answers.license)
  const licenseLink = renderLicenseLink(answers.license)
  return `# ${answers.title}
  ${licenseBadge}
 ## Table of contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
## Description
${answers.description}
## Installation
${answers.install}
## Usage
${answers.usage}
## License
${licenseNotice}
${licenseLink ? `For more information, please see the [${answers.license} license](${licenseLink}).` : ''}
## Contributing
${answers.contribute}
## Tests
${answers.test}
## Questions
For any questions, please contact me at: 
* GitHub: [${answers.github}](https://github.com/${answers.github})
* Email at: ${answers.email}
`;
}

export default generateMarkdown;
