const fs = require('fs');

function generatePage(html) {
    fs.writeFile('./output/template.html', html, error => {
        if(error){
        return console.log('Page could not be generated. Please try again')
        }
        console.log('Page created! Nice work!')
        process.exit();
    })
}
//Generates employee cards based on user entry
const createHtml = (data) => {
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
}