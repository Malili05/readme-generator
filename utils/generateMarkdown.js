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
// needs to be an if statement to generate the link in the table of contents to go to lincese section and doesnt make a link if none is selected

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## License
- ${license}
- ${renderLicenseLink(license)} 

  `
}
function renderGithub(questions) {
  return `[${questions}](https://github.com/${questions})`
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
- [License](#License)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## Tests

## Questions
- [Github ] ${renderGithub(answers.questions)}
- [Email with more questions ](mailto:${answers.email})

${renderLicenseSection(answers.license)}

  `;
}
module.exports = generateMarkdown;
