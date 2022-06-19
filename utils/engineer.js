const Employee = require('../utils/employee');

//Grabs info from the employee class and adds engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
        this.role = 'Engineer';
    }
}