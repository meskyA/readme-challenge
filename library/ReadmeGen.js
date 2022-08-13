class Markdown {
    static generateReadme(answers){
        return`
        #${answers.title}

        ### Table of Contents

        - [Project Description](#Description)
        - [Installation](#Installation)
        - [Usage] (#Usage)
        - [Contribution](#Contribution)
        - [test](#test)     
        - [Questions](#Questions])
        - [License](#License)

        ## Description
        ${answers.desctiption}

        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}  

        ## Contribution
        ${answers.contribution}

        ## Test
        ${answers.test}

        ## Questions
        ${answers.email}
        ${answers.gitHub}

        ## License
        ${answers.license}

        `   
    }
}
module.exports = Markdown
// description, installation instructions, usage information, contribution guidelines, and test instructions