const Employee = require('../utils/employee');

//Test to create employee object
//Arrange
describe('employee', () => {
    describe('Initialization', () => {
        //Act 
        it('should create a new employee object', () => {
            const employee = new Employee('Jane', 1234, 'janethehacker@nothackers.net');
            //Assert
            expect(typeof (employee)).toBe('object');
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));;
            expect(employee.email).toEqual(expect.any(String));;
        });
        //Test to pull employee name 
        it('should pull the employee name from the object', () => {
            const checkedName = 'Jane';
            const employee = new Employee(checkedName);
            expect(employee.getName()).toBe(checkedName);
        });
        //Test to pull emplyee id
        it('should pull the employee id from the object', () => {
            const checkedId = '1234';
            const employee = new Employee('Jane', checkedId);
            expect(employee.getId()).toBe(checkedId);
        });
        //Test to pull employee role
        it('should return the role as employee', () => {
            const checkedRole = 'Employee';
            const employee = new Employee('Jane', 1234, 'janethehacker@nothackers.net');
            expect(employee.getRole()).toBe(checkedRole);
        })
    });
});