const employee = require('../utils/employee');
//Test to create employee object
describe ('employee', () => {
    describe("Initialization", () => {
    it ('should create a new employee object', () => {
        //Arrange
        const employee = new Employee("Jane", 1234, "janethehacker@nothackers.net");
        //Act 
        expect(typeof(employee)).toBe("object");
        expect(employee.name).toEqual(String);
        expect(employee.id).toEqual(Number);
        expect(employee.email).toEqual(String);
        //Assert
    });
});
});
//Test to pull employee name
//Test to pull employee
//Test to pull emplyee id
//Test to pull employee role