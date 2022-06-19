const Engineer = require('../utils/engineer');
//Arrange
describe('Engineer', () => {
    describe('Initialization', () => {
        //Act 
        //Sets the github username
        it('set the github username for the engineer', () => {
            const checkGithub = 'whatsmyrepoagain';
            const engineer = new Engineer('Jane', 1234, 'janethehacker@nothackers.net', checkGithub);
            //Assert
            expect(engineer.github).toBe(checkGithub);
        });
        //Test to pull engineer github 
        it('should pull the github username', () => {
            const checkGithub = 'whatsmyrepoagain';
            const engineer = new Engineer('Jane', 1234, 'janethehacker@nothackers.net', checkGithub);
            expect(engineer.getGit()).toBe(checkGithub);
        });
        //Returns the role as engineer
        it('should return the role as engineer', () => {
            const checkedRole = 'Engineer';
            const engineer = new Engineer('Jane', 1234, 'janethehacker@nothackers.net');
            expect(engineer.getRole()).toBe(checkedRole);
        });
    });
});