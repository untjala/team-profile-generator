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
        return ''
    }
}