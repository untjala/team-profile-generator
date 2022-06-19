const Employee = require('../utils/employee');
//Test to create employee object
describe ('employee', () => {
    describe("Initialization", () => {
    it ('should create a new employee object', () => {
        //Arrange
        const employee = new Employee("Jane", 1234, "janethehacker@nothackers.net");
        //Act 
        expect(typeof(employee)).toBe("object");
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));;
        expect(employee.email).toEqual(expect.any(String));;
        //Assert
    });
});
});
//Test to pull employee name 
it ("should ")
//Test to pull emplyee id
//Test to pull employee role