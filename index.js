const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square, Svg } = require('./lib/shapes');
//const Svg = require('./lib/shapes');

function generateLogo() {

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
            if (response.shapes === 'Circle') {
                shapes = new Circle();
                console.log(shapes);
            }
            if (response.shapes === 'Triangle') {
                shapes = new Triangle();
            }
            if (response.shapes === 'Square') {
                shapes = new Square();
            }
            shapes.setColor(response.shapeColor);
            console.log(shapes);

            const svg = new Svg();
            svg.setCharacters(response.characters, response.characterColor);
            svg.setShapes(shapes);

            fs.writeFile('demo1.svg', svg.render(), (err) => {
                if (err) {
                    console.log(err);

                } else {
                    console.log('SVG Created');
                }
            })

        })
}
generateLogo();
