//Import packages.
const inquirer = require('inquirer');
const fs = require('fs');

//Import classes (circle, square, triangle)
const Triangle = require('./lib/triangle');
const Square = require ('./lib/square');
const Circle = require ('./lib/circle');


//Function to ask the user for the shape, text, and color for generating the logo.
async function promptLogo() {
    return inquirer.prompt(
        //Create an Array of prompts for the user
        [
        {
            type: 'input',
            name: 'letters',
            message: 'Please provide characters for the logo',
           //this piece is not working: validate: input => input.length > 0 && input.length <= 3,
        },
        {
            type: 'list',
            name: 'lettersColor',
            message: 'Please provide color choice for the text of the logo',
            choices: [
                'aqua',
                'blue',
                'coral',
                'crimson',
                'green',
                'indigo',
                'lavender',
                'magenta',
                'navy',
                'olive',
                'orchid',
                'plum',
                'purple',
                'red',
                'salmon',
                'seagreen',
                'teal',
                'yellow'
            ]
        },
        {
            // Using list type enquirer prompt to limit choices
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape from the list',
            // An array of choices for shape
            choices:['Triangle','Circle','Square']
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Please provide color choice area of the logo',
            choices: [
                'aqua',
                'blue',
                'coral',
                'crimson',
                'green',
                'indigo',
                'lavender',
                'magenta',
                'navy',
                'olive',
                'orchid',
                'plum',
                'purple',
                'red',
                'salmon',
                'seagreen',
                'teal',
                'yellow'
            ]
        }
    ]
    )
}

//Function to add Shape to the logo
function makeShape (shape){
    // if shape entered by user is a circle then return a circle.
    if (shape === 'Circle') {
        return new Circle();
    }
    // else if entry is a square, return a square shape.
    else if (shape === 'Square') {
        return new Square();
    }
    // else if entry is a triangle, return a triangle shape.
    else if (shape === 'Triangle') {
        return new Triangle();
    }
}

//Function to put together the logo (calls shape function and then adds the color and text)
async function run(){
    try{
        const logoInput = await promptLogo();
        const shape = makeShape(logoInput.shape);
        shape.updateColor(logoInput.shapeColor);
        
        // Get the SVG code for the shape
        const svgShape=shape.render(); 
        const svgText = `<text x="150" y="100" fill="${logoInput.lettersColor}" font-size="20" text-anchor="middle">${logoInput.letters}</text>`;
        const svgCode = `<svg width="500" height="500"> ${svgShape}${svgText}</svg>`;

        fs.writeFileSync('logo.svg', svgCode);
        console.log('Created logo.svg');
    } catch(error)
 {
    console.error('An error occurred:', error);
 }}

// Call the function to assemble to assemble the logo
run();
