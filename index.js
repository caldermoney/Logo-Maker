// Packages needed for this application
const inquirer = require('inquirer');

const validateColor = input => {
    const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const colorKeywords = ["red", "green", "blue", "yellow", "purple", "cyan", "white", "black"]; // add more as needed

    if (isValidHex.test(input) || colorKeywords.includes(input.toLowerCase())) {
        return true;
    } else {
        return 'Please enter a valid color keyword or hex value.';
    }
};

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the company?',
        validate: input => {
            return input.length <= 3 ? true : 'Enter up to three characters only!';
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color should the text be?',
        validate: validateColor
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Triangle', 'Circle', 'Square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should the shape be?',
        validate: validateColor
      }
];




// Function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
    })
}

// Function call to initialize app
init();