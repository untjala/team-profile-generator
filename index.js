// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');
// WHEN I am prompted for my team members and their information
//Links team member js files
const Engineer = require('./utils/engineer');
const Intern = require('./utils/intern');
const Manager = require('./utils/manager');

const teamMembers = [];
//Holds questions for adding a team manager
const managerQuestions = [
        {
            type: 'input',
            message: 'What is your team manager\'s name?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is your team manager\'s employee ID?',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'What is your team manager\'s e-mail address?',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is your team manager\'s office number?',
            name: 'managerNumber'
        },
        {
            type: 'checkbox',
            message: 'Would you like to add an engineer, an intern, or finish setup?',
            name: 'addMore',
            choices: ['Add engineer', 'Add intern', 'All done',]
        }
    ]
    const engineerQuestions = [
        {
            type: 'input',
            message: 'What is your team engineer\'s name?',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'What is your team engineer\'s employee ID?',
            name: 'engineerID'
        },
        {
            type: 'input',
            message: 'What is your team manager\'s e-mail address?',
            name: 'engineerrEmail'
        },
        {
            type: 'input',
            message: 'What is your team manager\'s office number?',
            name: 'engineerNumber'
        },
    ]
inquirer.prompt(managerQuestions).then((answers)=> {
    console.log('Great! Add your engineer:')
    output.template(answers)
});

