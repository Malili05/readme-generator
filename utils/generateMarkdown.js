// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license-badge](https://img.shields.io/badge/license-${license}-blue.svg)`
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[Link to ${license}](https://www.google.com/search?q=${license}+license)`
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## License
- ${license}
- ${renderLicenseLink(license)} 

  `
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.name}
${renderLicenseBadge(answers.license)}

## Description
${answers.purpose}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [license](#License)

## Installation
${answers.installation}

## Usage
${answers.usage}

${renderLicenseSection(answers.license)}

  `;
}
module.exports = generateMarkdown;
