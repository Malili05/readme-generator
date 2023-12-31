

// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// // TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
    type: "input",
    name: "name",
    message: "What is the name of this application?",
    },
    {
    type: "input",
    name: "purpose",
    message: "What is the purpose of this application?",
    },
    {
      type: "list",
      name: "license",
      message: "What is the license used for this?",
      choices: ["MIT","Apache 2.0","ISC","Mozilla Public"]
    },
    {
    type:"input",
    name: "installation",
    message: "How does the user install this application?",
    },
    {
    type:"input",
    name: "usage",
    message: "How does the user use this application?",
    },
    {
    type:"input",
    name: "credits",
    message: "Did anyone else contribute to this application? (put N/A if nobody else helped)",
    },
    {
    type:"input",
    name: "questions",
    message: "enter your Github username",
    },
    {
    type:"input",
    name: "email",
    message: "enter your email",
    },
  ])
  .then((answers) => {
    console.log(answers.name);
    console.log(answers.purpose);
    console.log(answers.installation);
    console.log(answers.usage);

    const template = generateMarkdown(answers)

    console.log(template);
// // TODO: Create a function to write README file
    fs.writeFile("READMEsample.md", template, function () {
      console.log("Success!");
    });
  });



// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();
