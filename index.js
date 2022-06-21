const inquirer = require('inquirer');

const {generatePage} = require('./utils/createHtml.js');
const Employee = require('./utils/employee');
const { Engineer, engineerPromptsArray } = require('./utils/engineer');
const { Intern, internPromptsArray } = require('./utils/intern');
const { Manager, managerPromptsArray } = require('./utils/manager');
const teamMembers = [];

const enterInfo = () => {managerPrompts()};
const managerPrompts = () => {
    inquirer
        .prompt(managerPromptsArray)
        .then((answer) => {
            const manager = new Manager(answer.name, answer.email, answer.id, answer.officeNumber)
            teamMembers.push(manager);
            addTeamMember();
        })
};
//Function to give the user an option to add another team member 
const addTeamMember = () => {
    inquirer.prompt(
        {
            type: 'rawlist',
            name: 'addTeamMember',
            message: 'Would you like to add additonal employees?',
            choices: ['Manager', 'Engineer', 'Intern', 'All done'],
        })
        .then(answer => {
            if (answer.addTeamMember === 'Manager') {return managerPrompts(); }
            if (answer.addTeamMember === 'Engineer') {return engineerPrompts(); }
            if (answer.addTeamMember === 'Intern') {return internPrompts(); }
            if (answer.addTeamMember === 'All Done') {return generatePage(teamMembers); }
        })
};
const engineerPrompts = () => {
    inquirer
        .prompt(engineerPromptsArray)
        .then((answer) => {
            const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github)
            teamMembers.push(engineer);
            addTeamMember();
        })
};

const internPrompts = () => {
    inquirer
        .prompt(internPromptsArray)
        .then((answer) => {
            const intern = new Intern (answer.name, answer.email, answer.id, answer.school)
            teamMembers.push(intern);
            addTeamMember();
            console.log([teamMembers])
        })
};
//Calls the prompt function
enterInfo();
