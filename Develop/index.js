// TODO: Include packages needed for this application

console.log("working")

//Inquirer to prompt
const inquirer = require('inquirer');
//fs for file generation
const fs = require("fs");
//link back to generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");


//This is the starter code provided, Having trouble understandign what to do outside of a prompt
// TODO: Create an array of questions for user input
// const questions = [
//     { 
//         type: 'input',
//         message: "What's the title of your project?",
//         name: 'title',
//     }
   

// ];

function promptUser() {
    inquirer
.prompt([
    
    { 
        type: 'input',
        message: "What's the title of your project?",
        name: 'title',
    },  
    { 
        type: 'input',
        message: "Add a description of your work, including the 'what,' 'why,' and 'how'",
        name: 'description',
    },
    { 
        type: 'input',
        message: "What are the step-by-step instructions for installation?",
        name: 'installation',
    },
    { 
        type: 'input',
        message: "Provide instructions and examples for use.",
        name: 'usage',
    },
    { 
        type: 'input',
        message: "List your collaborators",
        name: 'contributing',
    },
    { 
        type: 'checkbox',
        message: "Choose a license for your project",
        name: 'license',
        choices: ['Apache License 2.0,', 'MIT License', 'GNU General Public License'],
    },
    { 
        type: 'input',
        message: "What is your GitHub Username?",
        //TODO: use GitHub API to manifest credit
        name: 'username',
    },
    { 
        type: 'input',
        message: "Enter your E-mail address for contact purposes.",
        name: 'email',
    },
      
  ]);
}
  
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

//     // inquirer.prompt([
//     //   questions
        
//     // ])



// }

//TODO: Create a function to initialize app
async function init() {
    try {
        //get answers to the questions and generate them on the ReadMe
        const data = await promptUser();
        const generateReadMe = generateMarkdown(data);
        //writing the file
        await generateMarkdown('./docs/test.md', generateReadMe);
        
    }
        catch(err) {
        console.log(err);
        }
}

// Function call to initialize app
init();
