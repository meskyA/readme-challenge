// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = license.license;
  const myLicense = '';

  if (licenseType === 'MIT') {
    myLicense = `![badge](https://img.shields.io/badge/license-MIT-blue.svg) `
  } else if (licenseType === 'GPL') {
    myLicense = `https://img.shields.io/badge/license-GPL-yellow`;
  }  else if (licenseType === 'APACHE') {
    myLicense = `https://img.shields.io/badge/license-APACHE-green`;
  } else {
    license.license = 'N/A'
  }
 return myLicense;
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}



// module.exports = generateMarkdown;
