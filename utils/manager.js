const Employee = require('../utils/employee');

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
module.exports = Manager;