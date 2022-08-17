// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
// const questions = [];
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "description",
    message: "Write a brief description of your project:"
},
{
    type: "list",
    name: "license",
    message: "What kind of license does your project have?",
    choices: ["MIT", "APACHE", "GPL", "None"]
},
{
    type: "input",
    name: "installation",
    message: "What command should be used to run to install dependencies?"
},
{
    type: "input",
    name: "tests",
    message: "What commands should be used to run tests?"
},
{
    type: "input",
    name: "usage",
    message: "What does the user need to know to use the repo?"
},
{
    type: "input",
    name: "contributing",
    message: "What guidelines should the user know about contributing to the repo?"
}]
// const questions = async() => {
// let answered = await inquirer.prompt([
       
        
//     ]);
    // return answered


// // TODO: Create a function to write README file

// TODO: Create a function to initialize app

function init() {}
inquirer.prompt(questions)
.then((data) => {
    writeFileAsync('generatedREADME.md', generateMarkdown(data))
})
.then(() => console.log('Sucessfully wrote to index.html'))
.catch((err) => console.error(err));

// Function call to initialize app
init();



