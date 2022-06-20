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
                    return true;
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
    type: 'checkbox',
    message: 'What is the employee\s role?',
    name: 'employeeRole',
    choices: ['Manager', 'Engineer', 'Intern']
},
    ])

//Holds questions for adding a team manager
// const managerQuestions = [
//     {
//         type: 'input',
//         message: 'What is your team manager\'s name?',
//         name: 'managerName'
//     },
//     {
//         type: 'input',
//         message: 'What is your team manager\'s employee ID?',
//         name: 'managerID'
//     },
//     {
//         type: 'input',
//         message: 'What is your team manager\'s e-mail address?',
//         name: 'managerEmail'
//     },
//     {
//         type: 'input',
//         message: 'What is your team manager\'s office number?',
//         name: 'managerNumber'
//     },
//     {
//         type: 'checkbox',
//         message: 'Would you like to add an engineer, an intern, or finish setup?',
//         name: 'addMore',
//         choices: ['Add engineer', 'Add intern', 'All done',]
//     }
// ]
// const engineerQuestions = [
//     {
//         type: 'input',
//         message: 'What is your team engineer\'s name?',
//         name: 'engineerName'
//     },
//     {
//         type: 'input',
//         message: 'What is your team engineer\'s employee ID?',
//         name: 'engineerID'
//     },
//     {
//         type: 'input',
//         message: 'What is your team manager\'s e-mail address?',
//         name: 'engineerrEmail'
//     },
//     {
//         type: 'input',
//         message: 'What is your team manager\'s office number?',
//         name: 'engineerNumber'
//     },
// ]
// inquirer.prompt(managerQuestions).then((answers) => {
//     console.log('Great! Add your engineer:')
//     output.template(answers)
// });
}
//Calls the prompt function
userAnswers(); 
