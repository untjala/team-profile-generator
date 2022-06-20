const Intern = require('../utils/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        //Set's the intern's school
        it('set the school for the intern', () => {
            //Arrange
            const checkSchool = 'Duke';
            const intern = new Intern('Jane', 1234, 'janethehacker@nothackers.net', checkSchool);
            //Act 
            expect(intern.school).toBe(checkSchool);
            //Assert
        });
        //Test to pull intern's school 
        it('should pull the school', () => {
            const checkSchool = 'Duke';
            const intern = new Intern('Jane', 1234, 'janethehacker@nothackers.net', checkSchool);
            expect(intern.getSchool()).toBe(checkSchool);
        });
        //Returns the role as intern
        it('should return the role as intern', () => {
            const checkedRole = 'Intern';
            const intern = new Intern ('Jane', 1234, 'janethehacker@nothackers.net');
            expect(intern.getRole()).toBe(checkedRole);
        });
    });
});