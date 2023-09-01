const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const nsvg = require('./lib/shapes.test');

inquirer
.prompt([
    {
        type: 'list',
        name: 'shapes',
        message: 'What shape would you like your logo?',
        choices: ['Circle', 'Triangle', 'Square' ],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'What color would you like the shape?',
    },
    {
        type: 'input',
        name: 'characters',
        message: 'Pick 3 characters for your logo.',
    },
    {
        type: 'input',
        name: 'characterColor',
        message: 'What color would you like the characters?',
    },
]).then((response) => {
    console.log(response);
})