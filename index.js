const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./library/shapes.js');

function generateSVG(data) {
    
    const characters = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>`

    function chosenShape (shape) {
        if (shape === 'Circle') {
            const circle = new Circle;
            return circle.render();
        } else if (shape === 'Square') {
            const square = new Square;
            return square.render();
        } else {
            const triangle = new Triangle;
            return triangle.render();
        }
    }

    // const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${characters}</svg>`;
    const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${chosenShape()}</svg>`;
    // const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><g${chosenShape()}${characters}></g></svg>`;
    
    return svg;
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters to display in our logo.',
        validate: function(text) {
            if (text.length > 3) {
                return 'Error: Too many characters.';
            } else if (text.length < 1) {
                return 'Error: Not enough characters.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color.',
        validate: function(textColor) {
            if (textColor.length >= 1) {
                return true;
            } else {
                return 'Error: please set a text color';
                
            }
        }
    },
    {
        type: 'checkbox',
        name: 'shape',
        message: 'Choose the shape of your logo.',
        choices: [
            'Circle',
            'Square',
            'Triangle',
        ],
        validate: function(shape) {
            if (shape.length < 1) {
                return 'Error: please select a shape';
            } else if (shape.length > 1) {
                return 'Error: Only one shape can be selected'
            } else {
                return true;   
            }
        }
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color.',
        validate: function(shapeColor) {
            if (shapeColor.length >= 1) {
                return true;
            } else {
                return 'Error: please set a shape color';
                
            }
        }
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        }

        console.log('Generated logo.svg');
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            const logoData = generateSVG(data);
            writeToFile('logo.svg', logoData);
        })
        .catch((error) => {
            if (error) {
                return console.log(error);
            }
        });
};

// Function call
init();