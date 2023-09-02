const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const svg = require('./lib/shapes.test');

function generateLogo(){

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shapes',
            message: 'What shape would you like your logo?',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
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
        let shapes;
        if (response.shapes() === 'Circle') {
            shapes = new Circle()
        }
        if (response.shapes() === 'Triangle') {
            shapes = new Triangle()
        }
        if (response.shapes() === 'Square') {
            shapes = new Square()
        }
        shapes.setColor(response.shapeColor)

        const Svg = new svg()
        Svg.characters(response.characters, response.characterColor)
        Svg.shapes(shapes)
        
        fs.writeFile('demo1.svg', Svg.render())

    })
}
generateLogo();
