const Employee = require('../utils/employee');

//Grabs info from the employee class and adds intern
class Manager extends Employee {
    //Adds the intern's school
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
    getRole() {
        return this.role;
    };
};
module.exports = Manager;