const Employee = require('../utils/employee');
const managerPromptsArray = [
    {
        type: 'input',
        message: 'What is the manager\'s name?',
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
        message: 'What is the manager\'s email?',
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
        message: 'What is the manager\'s ID?',
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
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
        validate: function (officeNumber) {
            if (officeNumber) {
                return true;
            } else {
                return 'School name cannot be blank'
            }
        }
    },
]
//Grabs info from the employee class and adds manager to it
class Manager extends Employee {
    //Adds the managers's office number
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
    getRole() {
        return this.role;
    };
};
module.exports = {Manager, managerPromptsArray};