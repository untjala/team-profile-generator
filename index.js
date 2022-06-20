const inquirer = require('inquirer');
const pageGen = require('./utils/pageGen.js')
const Employee = require('./utils/employee')
const { Engineer, engineerPromptsArray } = require('./utils/engineer');
const { Intern, internPromptsArray } = require('./utils/intern');
const { Manager, managerPromptsArray } = require('./utils/manager');
const teamMembers = []

const enterInfo = () => { managerPrompts() };
const managerPrompts = () => {
    inquirer
        .prompt(managerPromptsArray)
        .then((data) => {
            const manager = new Manager(data.name, data.email, data.id, data.officeNumber)
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
        .then(data => {
            if (data.addTeamMember === 'Manager') {return managerPrompts(); }
            if (data.addTeamMember === 'Engineer') {return engineerPrompts(); }
            if (data.addTeamMember === 'Intern') {return internPrompts(); }
            if (data.addTeamMember === 'All Done') {return pageGen(teamMembers); }
        })
};
const engineerPrompts = () => {
    inquirer
        .prompt(engineerPromptsArray)
        .then((data) => {
            const engineer = new Engineer(data.name, data.email, data.id, data.github)
            teamMembers.push(engineer);
            addTeamMember();
        })
};

const internPrompts = () => {
    inquirer
        .prompt(internPromptsArray)
        .then((data) => {
            const intern = new Intern (data.name, data.email, data.id, data.school)
            teamMembers.push(intern);
            addTeamMember();
        })
};
//Calls the prompt function
enterInfo();
