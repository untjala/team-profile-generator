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
function questionData() {
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
        //After all employee prompts are done, the user will be prompted for the manager office number if they select manager as role
        .then(answers => {
            if (answers.employeeRole === 'Manager') {
                inquirer.prompt([
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
                    //Adds the manager office number to manager info, pushes manager into the team member array
                    .then(response => {
                        const manager = new Manager(answers.employeeName, answers.employeeEmail, answers.employeeID, answers.employeeRole, response.officeNumber)
                        teamMembers.push(manager);
                        addTeamMember()
                    })
                //If the user selects engineer, they are given the engineer prompts directely after the employee prompts
            } else if (answers.employeeRole === 'Engineer') {
                inquirer.prompt([
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
                    //Adds engineer info to the engineer class, pushes engineer into the team array
                    .then(response => {
                        const engineer = new Engineer(answers.employeeName, answers.employeeEmail, answers.employeeID, answers.employeeRole, response.engineerGit)
                        teamMembers.push(engineer);
                        addTeamMember()
                    })
                //If the user selects intern, they are prompted to enter the interns school
            } else if (answers.employeeRole === 'Intern') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: 'What is the intern\'s school?',
                        validate: function (internSchool) {
                            if (internSchool) {
                                return true;
                            } else {
                                return 'School cannot be blank'
                            }
                        }
                    }
                ])
                    //Adds the intern to the array
                    .then(response => {
                        const intern = new Intern(answers.employeeName, answers.employeeEmail, answers.employeeID, answers.employeeRole, response.internSchool)
                        teamMembers.push(intern);
                        addTeamMember()
                    })
            }
            else {
                const setTeam = new Employee(answers.employeeName, answers.employeeEmail, answers.employeeID, answers.employeeRole)
                teamMembers.push(setTeam);
                addTeamMember()
            }
            //Function to give the user an option to add another team member 
            function addTeamMember() {
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'addEmployee',
                        message: 'Would you like to add additonal employee\'s?'
                    }
                ])
                .then(response => {
                    if(response.addTeamMember === true) {
                        questionData(teamMembers);
                    } else {
                        let teamCards = templateGen(teamMembers);
                        pageGen(teamCards)
                    }
                })
            }
        })
}
//Calls the prompt function
questionData(); 
