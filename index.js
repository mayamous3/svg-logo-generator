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
            message: 'Please provide characters for the logo'
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please provide color choice for the logo'
        },
        {
            // Using list type enquirer prompt to limit choices
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape from the list',
            // An array of choices for shape
            choices:['Triangle','Circle','Square']
        },
    ]
    )
}