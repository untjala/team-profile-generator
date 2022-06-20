const Employee = require('../utils/employee');
//Array of questions for manager
const engineerPromptsArray = [
    {
        type: 'input',
        message: 'What is the engineer\'s name?',
        name: 'name',
        validate: function (name) {
            if (name) {
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
        message: 'What is the engineer\'s email?',
        name: 'email',
        validate: function (email) {
            if (email) {
                return true;
            } else {
                return 'Email cannot be blank'
            }
        }
    },
    {
        type: 'input',
        message: 'What is the engineer\'s ID?',
        name: 'id',
        validate: function (id) {
            if (id) {
                return true;
            } else {
                return 'ID cannot be blank'
            }
        }
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub?',
        name: 'github',
        validate: function (github) {
            if (github) {
                return true;
            } else {
                return 'Username cannot be blank'
            }
        }
    },
]
//Grabs info from the employee class and adds engineer to it
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }
    //Creates method to get the engineer's github username and role
    getGit() {
        return this.github;
    }
    getRole() {
        return this.role;
    };
}; 
module.exports = {Engineer, engineerPromptsArray};