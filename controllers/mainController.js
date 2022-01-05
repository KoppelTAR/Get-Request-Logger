const fs = require('fs');
const date = require('../model/getdate.js');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'log.json');


exports.getMainPage = (request, response)=>{
    let data = fs.readFileSync(filePath);
    let obj = JSON.parse(data);
    let time =  date.getDate();
    let newVisit = {
        visitTime: time,
    };
    obj.push(newVisit);
    JSON.stringify(obj);
    fs.writeFile(filePath, JSON.stringify(obj), (error) =>{
        log = fs.readFileSync(filePath);
        log = JSON.parse(log);
        response.render('index', {currentVisits: log});
    });
        
    }