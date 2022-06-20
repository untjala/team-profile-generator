// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');
// WHEN I am prompted for my team members and their information
//Links team member js files
const { Employee } = require('./utils/class.js')
const { Engineer } = require('./utils/class.js');
const { Intern } = require('./utils/class.js');
const { Manager } = require('./utils/class.js');

const teamMembers = []
//function to start prompts and store user responses
function userAnswers() {
    inquirer.prompt([
        //Prompts for employee info
        {
            type: 'input',
            message: 'What is the employee\'s name?',
            name: 'employeeName',
            validate: function (nameInfo) {
                if (nameInfo) {
                    //If there is an input, the prompts will continue
                    return true;
                    //Otherwise, the user will get the alert that they have to enter an name
                } else {
                    return 'Name cannot be blank'
                }
            }
},
{
    type: 'input',
    message: 'What is the employee\'s email?',
    name: 'employeeEmail',
    validate: function (emailInfo) {
        if (emailInfo) {
            return true;
        } else {
            return 'Email cannot be blank'
        }
    }
},
{
    type: 'input',
    message: 'What is the employee\'s ID?',
    name: 'employeeID',
    validate: function (idInfo) {
        if (idInfo) {
            return true;
        } else {
            return 'ID cannot be blank'
        }
    } 
},
{
    type: 'list',
    message: 'What is the employee\s role?',
    name: 'employeeRole',
    choices: ['Manager', 'Engineer', 'Intern']
},
    ])
.then(answers => {
    if (answers.employeeRole === 'Manager') {
        inquirer.prompt ([
                    {
                        type: 'input',
                        message: 'What is your team manager\'s office number?',
                        name: 'officeNumber',
                        validate: function (officeNumber) {
                            if (officeNumber) {
                                return true;
                            } else {
                                return 'Office number cannot be blank'
                            }
                        } 
                    },
        ])
        .then(response => {
            const manager = new Manager (answers.employeeName, answers.employeeEmail, answers.employeeID, answers.employeeRole, response.officeNumber)
            teamMembers.push(manager);
        })
    } else if (answers.employeeRole === 'Engineer') {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'engineerGit',
                message: 'What is the engineer\'s GitHub username?',
                validate: function (engineerGit) {
                    if (engineerGit) {
                        return true;
                    } else {
                        return 'Username cannot be blank'
                    }
                } 
            }
        ])
        .then(response => {
            const engineer = new Engineer (answers.employeeName, answers.employeeEmail, answers.employeeID, answers.employeeRole, response.engineerGit)
            teamMembers.push(engineer);
        })
    }
})
}
//Calls the prompt function
userAnswers(); 
