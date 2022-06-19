const Employee = require('../utils/employee');

//Grabs info from the employee class and adds intern
class Intern extends Employee {
    //Adds the intern's school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    };
};
module.exports = Intern;