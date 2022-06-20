const fs = require('fs');

function generatePage(html) {
    fs.writeFile('./output/template.html', template, err => {
        if(err){
            throw err
        }
        console.log('Page created! Nice work!')
        stylePage()
    })
}
const stylePage = () => {
    fs.copyFile('./output/style.css', err => {
        if(err){
            throw err
        }
    });
}
module.exports = generatePage, stylePage