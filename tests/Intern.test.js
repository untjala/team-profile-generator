const Intern = require('../utils/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('set the school for the intern', () => {
            //Arrange
            const checkSchool = 'Duke';
            const intern = new Intern('Jane', 1234, 'janethehacker@nothackers.net', checkSchool);
            //Act 
            expect(intern.school).toBe(checkSchool);
            //Assert
        });
        //Test to pull engineer github 
        it('should pull the school', () => {
            const checkSchool = 'Duke';
            const intern = new Intern('Jane', 1234, 'janethehacker@nothackers.net', checkSchool);
            expect(intern.getSchool()).toBe(checkSchool);
        });
        it('should return the role as intern', () => {
            const checkedRole = 'Intern';
            const intern = new intern('Jane', 1234, 'janethehacker@nothackers.net');
            expect(intern.getRole()).toBe(checkedRole);
        });
    });
});