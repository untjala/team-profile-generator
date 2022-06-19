const Engineer = require('../utils/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('set the github username for the engineer', () => {
            //Arrange
            const checkGithub = 'whatsmyrepoagain';
            const engineer = new Engineer('Jane', 1234, 'janethehacker@nothackers.net', checkGithub);
            //Act 
            expect(engineer.github).toBe(checkGithub);
            //Assert
        });
        //Test to pull engineer github 
        it('should pull the github username', () => {
            const checkGithub = 'whatsmyrepoagain';
            const engineer = new Engineer('Jane', 1234, 'janethehacker@nothackers.net', checkGithub);
            expect(engineer.getGit()).toBe(checkGithub);
        });
        it('should return the role as employee', () => {
            const checkedRole = 'Engineer';
            const engineer = new Engineer('Jane', 1234, 'janethehacker@nothackers.net');
            expect(engineer.getRole()).toBe(checkedRole);
        });
    });
});