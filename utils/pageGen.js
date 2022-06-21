const fs = require('fs');
function writeToFile(html) {
    fs.writeFile('./output/index.html', html, function (error) {
        if(error){
        return console.log('Page could not be generated. Please try again')
        }
        console.log('Page created! Nice work!')
        process.exit();
    })
}
//Template for employee cards
const pageGen = (answer) => {
    const manager = managerInput => {
        return ` <section class="d-flex card border-light col-12 input-card" style="max-width: 18rem;"> 
        <div class="card-header">${managerInput.getName()} </div>
        <div class="card-body text-dark">
          <h5 class="card-title">${managerInput.getRole()}</h5>
          <ul> 
            <li>${managerInput.getId()}</li>
            <li>${managerInput.getEmail()}</li>
            <li>${managerInput.getOfficeNumber()}</li>
          </ul>
        </div>
      </section>`
    }
    const engineer = engineerInput => {
            return ` <section class="d-flex card border-light col-12 input-card" style="max-width: 18rem;"> 
            <div class="card-header">${engineerInput.getName()} </div>
            <div class="card-body text-dark">
              <h5 class="card-title">${engineerInput.getRole()}</h5>
              <ul> 
                <li>${engineerInput.getId()}</li>
                <li>${engineerInput.getEmail()}</li>
                <li>${engineerInput.getGit()}</li>
              </ul>
            </div>
          </section>`
    }
    const intern = internInput => {
        return ` <section class="d-flex card border-light col-12 input-card" style="max-width: 18rem;"> 
            <div class="card-header">${internInput.getName()} </div>
            <div class="card-body text-dark">
              <h5 class="card-title">${internInput.getRole()}</h5>
              <ul> 
                <li>${internInput.getId()}</li>
                <li>${internInput.getEmail()}</li>
                <li>${internInput.getSchool()}</li>
              </ul>
            </div>
          </section>`
    }
    //For loop to generate employee cards based on prompt data
    const makeCards = teamMembers => {
        let teamMembersHtml = ""
        for (i = 0; i < teamMembers.length; i++) {
            if(teamMembers[i].getRole() === 'Manager') {
                teamMembersHtml += manager(teamMembers[i])
            }
            if(teamMembers[i].getRole() === 'Engineer') {
                teamMembersHtml += engineer(teamMembers[i])
            }
            if(teamMembers[i].getRole() === 'Intern') {
                teamMembersHtml += intern(teamMembers[i])
        }
    }
    return teamMembersHtml;
}
//HTML Template
const template = answer => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile Generator</title>
    </head>
    
    <body>
      <header class="container col-12 input-header">
        <div class="d-flex justify-center team-head">
          <h1>My Team</h1>
        </div>
      </header>
      <main class="container d-flex input-container">
    ${makeCards(answer)}
    </main>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"></script>
    </html>`
}
writeToFile(template(answer));
}
module.exports = pageGen;
