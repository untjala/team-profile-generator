//Creates the employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    };
    //Methods to get the name, id, and email of the employee
    getName() {
        return this.name;
    };
    getId() {
        return this.name;
    };
    getEmail() {
        return this.name;
    };
    getRole() {
        return this.role;
    };
}


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
module.exports = {Manager, Employee, Engineer, Intern};