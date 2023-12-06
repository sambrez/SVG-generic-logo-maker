const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./library/shapes.js');
const generateSVG = require('./library/generateSVG.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: '',
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
        name: 'text-color',
        message: '',
        default: '[white]',
    },
    {
        type: 'checkbox',
        name: 'shape',
        message: '',
        default: '[Circle]',
        choices: [
            'Circle',
            'Square',
            'Triangle',
        ],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: '',
        default: '[green]',
    },
];