// established variables for imported packages
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./library/shapes.js');

// function that generates the content of the svg file
function generateSVG(data) {
    
    // establishes the text content and color for the svg based on user input
    const characters = `<text x="153" y="125" font-size="45" font-family="script" text-anchor="middle" text-align="center" fill="${data.textColor}">${data.text}</text>`;

    // establishes the shape and shape color for the svg based on user input utilizing the imported classes from the shapes.js file
    function chosenShape () {
        if (data.shape[0] === 'Circle') {
            // creates new instance of 'Circle" class
            const circle = new Circle;
            // sets the shape's color by passing in user input
            const circleColor = circle.setColor(data.shapeColor);
            return circle.render(circleColor);

        } else if (data.shape[0] === 'Square') {
            // // creates new instance of 'Square" class
            const square = new Square;
            // sets the shape's color by passing in user input
            const squareColor = square.setColor(data.shapeColor);
            return square.render(squareColor);

        } else {
            // // creates new instance of 'Triangle" class
            const triangle = new Triangle;
            // sets the shape's color by passing in user input
            const triangleColor = triangle.setColor(data.shapeColor);
            return triangle.render(triangleColor);
        }
    }

    // creates variable of svg content with combined text and shape features
    const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${chosenShape()}${characters}</svg>`;
    
    return svg;
}

// questions used to prompt users to set the features of their logo
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

// function that writes the svg file
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
        // function that prompts user to answer questions
        .prompt(questions)
        // responses of user then passed to the writeToFile function
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

// app intiation function call
init();