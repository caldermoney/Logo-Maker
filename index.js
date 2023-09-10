// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const { renderTriangle, renderCircle, renderSquare } = require('./lib/shapes');

// Validates that the user selects a valid color.
const validateColor = input => {
    const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const colorKeywords = ["red", "green", "blue", "yellow", "purple", "cyan", "white", "black"]; // add more as needed

    if (isValidHex.test(input) || colorKeywords.includes(input.toLowerCase())) {
        return true;
    } else {
        return 'Please enter a valid color keyword or hex value.';
    }
};

// Positions the text relative to the shape.
function getTextPositioning(shape, textColor, name) {
    switch (shape) {
        case 'Triangle':
            return `<text x="50%" y="70%" text-anchor="middle" fill="${textColor}" font-size="24">${name}</text>`;
        case 'Circle':
            return `<text x="50%" y="55%" text-anchor="middle" fill="${textColor}" font-size="24">${name}</text>`;
        case 'Square':
            return `<text x="50%" y="55%" text-anchor="middle" fill="${textColor}" font-size="24">${name}</text>`;
        default:
            return '';
    }
}

// Identifies user input and matches the shape and calls the render function for the shape selected.
function generateSVG(answers) {
    let shapeSVG = '';

    switch(answers.shape) {
        case 'Triangle':
            shapeSVG = renderTriangle(answers.shapeColor);
            break;
        case 'Circle':
            shapeSVG = renderCircle(answers.shapeColor);
            break;
        case 'Square':
            shapeSVG = renderSquare(answers.shapeColor);
            break;
        default:
            break;
    }
// calls the textPositioning function.
    const textSVG = getTextPositioning(answers.shape, answers.textColor, answers.name);
// Creates the SVG string.
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        ${textSVG}
    </svg>`;
}


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

// Save the SVG string to a file.
function saveToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error("Error saving SVG to file.", err);
        } else {
            console.log("SVG saved succesfully!");
        }
    });
}



// Function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const svg = generateSVG(answers);
        saveToFile("logo.svg", svg);
        console.log("Generated logo.svg");
    });
}

// Function call to initialize app
init();