// const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// const questions = () =>
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "author",
//             message: "What is the author's name?"
//         },
//         {
//             type: "input",
//             name: "username",
//             message: "What is your GitHub username?"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is your email address?"
//         },
//         {
//             type: "input",
//             name: "title",
//             message: "What is your project title?"
//         },
//         {
//             type: "input",
//             name: "author",
//             message: "What is the author's name?"
//         },
//     ])
// class Markdown {
//     static generateReadme(answers){
//         return`
//         #${answers.title}

//         ### Table of Contents

//         - [Project Description](#Description)
//         - [Installation](#Installation)
//         - [Usage] (#Usage)
//         - [Contribution](#Contribution)
//         - [test](#test)     
//         - [Questions](#Questions])
//         - [License](#License)

//         ## Description
//         ${answers.desctiption}

//         ## Installation
//         ${answers.installation}

//         ## Usage
//         ${answers.usage}  

//         ## Contribution
//         ${answers.contribution}

//         ## Test
//         ${answers.test}

//         ## Questions
//         ${answers.email}
//         ${answers.gitHub}

//         ## License
//         ${answers.license}

//         `   
//     }
// }
// module.exports = Markdown
// // description, installation instructions, usage information, contribution guidelines, and test instructions
// // The Markdown is referring to the utils\generateMarkdown.js file that you will need to require inside of the index.js file at the top





// // 10:29
// // I believe you need to require fs, path, inquirer, and the generateMarkdown js file from the utils folder