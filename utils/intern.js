const Employee = require('../utils/employee');
const internPromptsArray = [
    {
        type: 'input',
        message: 'What is the intern\'s name?',
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
        message: 'What is the intern\'s email?',
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
        message: 'What is the intern\'s ID?',
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
        message: 'What school does the intern attend?',
        name: 'school',
        validate: function (school) {
            if (school) {
                return true;
            } else {
                return 'School name cannot be blank'
            }
        }
    },
]
//Grabs info from the employee class and adds intern
class Intern extends Employee {
    //Adds the intern's school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    //Method to get the intern's school and role
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    };
};
module.exports = {Intern, internPromptsArray};