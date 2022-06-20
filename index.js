// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');
// WHEN I am prompted for my team members and their information
//Links team member js files
const Engineer = require('./utils/engineer');
const Intern = require('./utils/intern');
const Manager = require('./utils/manager');
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const teamMembers = [];
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
    ]
inquirer.prompt(managerQuestions).then((answers)=> {
    output.template(answers)
});
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
