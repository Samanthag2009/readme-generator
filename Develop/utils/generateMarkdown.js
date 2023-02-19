// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let licenseType = data.license
let yourLicense = ''

if(licenseType === 'Apache License 2.0') {
  yourLicense = `[img src="https://img.shields.io/badge/License-Apache%202.0-green"]`
  } else if (licenseType === 'MIT License') {
  yourLicense = `[img src="https://img.shields.io/badge/License-MIT-yellow"]`
  } else if (licenseType === "GNU General Public License") {
  yourLicense = `[img src="https://img.shields.io/badge/License-GNU-blue"]`
  } else {
  yourLicense = ''
  }
return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let yourLicenseType = data.license
  let yourLicenseLink = ""

  if(yourLicenseType === 'Apache License 2.0') {
    yourLicenseLink = `[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)`
    } else if (yourLicenseType === 'MIT License') {
    yourLicenseLink = `[MIT License](https://opensource.org/license/mit/)`
    } else if (yourLicenseType === "GNU General Public License") {
    yourLicenseLink = `[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html)`
    } else {
    yourLicenseLink = ''
    }
  return yourLicenseLink;
};



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge();
  renderLicenseLink();


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  `#${data.title}

##Description
${data.description}

##Installation
${data.installation}

##Usage
${data.usage}

##Contributing
${data.contributing}

##License

${renderLicenseSection()}


##Contact Me
Find me on Github: [${data.username}] (https://github.com${data.username})
Email me: ${data.email}


`;
}

module.exports = generateMarkdown;

