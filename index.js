'use strict';
var inquirer = require('inquirer');

console.log('Test command line application');

let choices30 = () => {
    return []
}

let questions = [
    {
        type: 'input',
        name: 'name',
        message: 'your name?',
        default : 'don'
    },
    {
        type: 'input',
        name: 'age',
        message: 'your age?',
        validate: function (value) { 
            var valid = value && !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number
    },
    {
        type: 'input',
        name: 'username',
        message: 'your user name?',
        default : 'don-l'
    },
    {
        type: 'password',
        name: 'password',
        message: 'your password?',
        mask: '*',
        validate: function (value) { 
            var valid = value && /[0-9]/ig.test(value) && /[a-z]/ig.test(value)
            return valid || 'Please enter a password, number and a letter required';
        }
    },
    {
        type: 'list',
        name: 'level',
        message: 'What level are you in?',
        choices: ['1', '2', '3'],
    }


];

 
inquirer.prompt(questions).then(answers => {
    console.log('\nAnswers:');
    console.log(JSON.stringify(answers, null, ' -- '));
});

