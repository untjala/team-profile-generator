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
module.exports = Employee;