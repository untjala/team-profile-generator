const Employee = require('../utils/employee');

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
module.exports = Engineer;