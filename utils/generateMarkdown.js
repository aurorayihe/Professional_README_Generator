// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return `![{${license}}](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    return 'license link';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License
${renderLicenseLink(license)}
    `
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Desceiption](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Test](#Test)
* [Questions](#Questions)

## Description

${data.description}

## Installation

${data.instal}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Test

${data.test}

## Questions

Please contact me if you have any questions.
Email: ${data.email}
GitHub: [${data.username}](http://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
