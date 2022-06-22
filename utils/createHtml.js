const fs = require('fs');

//Template for employee cards
const generatePage = (answer) => {
  const manager = managerAnswer => {
    console.log('Generating page...')
    return ` <section class="d-flex card border-light col-12 input-card p-0" style="max-width: 18rem;"> 
    <div class="card-header">${managerAnswer.getRole()} </div>
    <div class="card-body text-dark">
    <h5 class="card-title">${managerAnswer.getName()}</h5>
    <ul> 
    <li>Employee ID: ${managerAnswer.getId()}</li>
    <li>Email: ${managerAnswer.getEmail()}</li>
    <li>Office Number: ${managerAnswer.getOfficeNumber()}</li>
    </ul>
    </div>
    </section>`
  }
  const engineer = engineerAnswer => {
    return ` <section class="d-flex card border-light col-12 input-card p-0" style="max-width: 18rem;"> 
    <div class="card-header">${engineerAnswer.getRole()} </div>
    <div class="card-body text-dark">
    <h5 class="card-title">${engineerAnswer.getName()}</h5>
    <ul> 
    <li>Employee ID: ${engineerAnswer.getId()}</li>
    <li>Email: ${engineerAnswer.getEmail()}</li>
    <li>GitHub: ${engineerAnswer.getGit()}</li>
    </ul>
    </div>
    </section>`
  }
  const intern = internAnswer => {
    return ` <section class="d-flex card border-light col-12 input-card p-0" style="max-width: 18rem;"> 
    <div class="card-header">${internAnswer.getRole()} </div>
    <div class="card-body text-dark">
    <h5 class="card-title">${internAnswer.getName()}</h5>
    <ul> 
    <li>Employee ID: ${internAnswer.getId()}</li>
    <li>Email: ${internAnswer.getEmail()}</li>
    <li>School: ${internAnswer.getSchool()}</li>
    </ul>
    </div>
    </section>`
  }
  //For loop to generate employee cards based on prompt data
  const makeCards = teamMembers => {
    let teamMembersHtml = ' '
    for (i = 0; i < teamMembers.length; i++) {
      if (teamMembers[i].getRole() === 'Manager') {
        teamMembersHtml += manager(teamMembers[i])
      }
      if (teamMembers[i].getRole() === 'Engineer') {
        teamMembersHtml += engineer(teamMembers[i])
      }
      if (teamMembers[i].getRole() === 'Intern') {
        teamMembersHtml += intern(teamMembers[i])
      }
    }
    return teamMembersHtml
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
    <link rel="stylesheet" href="./output/style.css"
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
    </head>
    
    <body>
    <header class="container col-12 input-header">
    <div class="d-flex justify-center team-head">
    <h1>Our Team!</h1>
    </div>
    </header>
    <main class="container d-flex input-container">
    ${makeCards(answer)}
    </main>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"></script>
    </html>`
  }
  function writeHtml(html) {
    fs.writeFile('./output/index.html', html, function (error) {
      if (error) {
        return console.log('Page could not be generated. Please try again')
      }
      console.log('Page created! Nice work!')
    })
  }
  writeHtml(template(answer));
}
module.exports = { generatePage };
