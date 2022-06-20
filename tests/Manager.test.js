const Manager = require('../utils/manager');
//Arrange
describe('Manager', () => {
    describe('Initialization', () => {
        //Sets the office number for the manager
        //Act 
        it('sets the office number for the manager', () => {
            const checkOfficeNumber = '5678';
            const intern = new Manager('Jane', 1234, 'janethehacker@nothackers.net', checkOfficeNumber);
            //Assert
            expect(intern.officeNumber).toBe(checkOfficeNumber);
        });
        //Returns the role as manager
        it('should return the role as manager', () => {
            const checkedRole = 'Manager';
            const manager = new Manager ('Jane', 1234, 'janethehacker@nothackers.net');
            expect(manager.getRole()).toBe(checkedRole);
        });
    });
});