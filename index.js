// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
// const questions = [];
const questions = () =>
    inquirer.prompt([
       
        {
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
            choices: ["MIT", "APACHE 2.0", "BSD 3 Clause", "BSD 2 Clause", "Boost 1.0", "None"]
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
        },
    ]);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function generateMD(data){
    return`
        #${data.title}
        ${badge}
        ${data.desctiption}

        ## Table of Contents

        - [Project Description](#Description)
        - [Installation](#Installation)
        - [Usage] (#Usage)
        - [Contribution](#Contribution)
        - [test](#test)     
        - [Questions](#Questions])
        - [License](#License)

        ### Description
        ${data.desctiption}

        ### Installation
        In order to install the necessary dependencies, open the console and run the following:
        \`\`\`${data.installation}\`\`\`
        

        ### Usage
        ${data.usage}  

        ### Contributing
        ${data.contributing}

        ### Test
        In order to test, open the console and run the following
        \`\`\`${data.test}\`\`\`

        ## Questions
        Should you have any questions about regarding this project, please contact ${data.author} on [GitHub](https://github.com/ ${data.username} or at
        ${data.email}
       

        ## License
        The project is licensed under:
        ${data.license}

        `      
}

// TODO: Create a function to initialize app

function init() {}
questions()
.then((data) => writeFileAsync('generatedREADME.md', generateMD(data)))
.then(() => console.log('Sucessfully wrote to index.html'))
.catch((err) => console.error(err));

// Function call to initialize app
init();


// https://github.com/meskyA
// The purpose of this project is to create a professional README generator with all general components. I decided to do this project after learning the importance of README file in developers’ world. It is a guide that gives users a detailed description of a particular project with instructions on how to install and run the project. I learned that writing a README file is not as  straightforward as it sounds. It requires some consideration and effort to make it legit and useful for readers.

// To contribute to a repo, create a personal fork of the project on Github by clicking the ‘fork’ button. Then clone the fork on local computer using the terminal and add the original repo as a remote called upstream.

// Need to install node js on your computer. Also, json package or package-lock need to be installed in the terminal by using the command npm init.

// git clone, npm install, and node index.js

// There is no test at this time.