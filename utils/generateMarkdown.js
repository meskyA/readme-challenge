// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var myLicense = '';

  if (license === 'MIT') {
    myLicense = `![badge](https://img.shields.io/badge/license-MIT-blue.svg) `
  } else if (license === 'GPL') {
    myLicense = `https://img.shields.io/badge/license-GPL-yellow`;
  }  else if (license === 'APACHE') {
    myLicense = `https://img.shields.io/badge/license-APACHE-green`;
  }
 return myLicense;
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return '- [License](#license)';
  }

};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contributing)
- [test](#test)     
- [Questions](#questions)
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

### Description)
${data.description}

### Installation
In order to install the necessary dependencies, open the console and run the following:
\`\`\`${data.installation}\`\`\`


### Usage
${data.usage}  

### Contributing
${data.contributing}

### Test
In order to test, open the console and run the following
\`\`\`${data.tests}\`\`\`

### Questions
Should you have any questions about regarding this project, please contact ${data.author} on [GitHub](https://github.com/ ${data.username} or at
${data.email}


### License
The project is licensed under:
${data.license}

`      
}


module.exports = generateMarkdown;
