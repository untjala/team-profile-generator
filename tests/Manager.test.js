const Manager = require('../utils/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('sets the office number for the manager', () => {
            //Arrange
            const checkOfficeNumber = '5678';
            const intern = new Manager('Jane', 1234, 'janethehacker@nothackers.net', checkOfficeNumber);
            //Act 
            expect(intern.officeNumber).toBe(checkOfficeNumber);
            //Assert
        });
        //Returns the role as manager
        it('should return the role as manager', () => {
            const checkedRole = 'Manager';
            const manager = new Manager ('Jane', 1234, 'janethehacker@nothackers.net');
            expect(manager.getRole()).toBe(checkedRole);
        });
    });
});