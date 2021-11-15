// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br/>
This application uses ${data.license} license. 
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
${data.questions}<br/>
<br/>
GitHub: [${data.username}](https://github.com/${data.username})<br/>
<br/>
✉️ Email me with any questions: ${data.email}<br/>
`;
}

module.exports = generateMarkdown;
