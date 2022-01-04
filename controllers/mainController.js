const { json } = require('express');
const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'log.json');


exports.getMainPage = (request, response)=>{

    
    let data = fs.readFileSync(filePath);
    let obj = JSON.parse(data);
    var currentdate = new Date(); 
    var today = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds() + " "+
    currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();
                
    let newVisit = {
        visitTime: today,
    };
    obj.push(newVisit);
    JSON.stringify(obj);
        fs.writeFile(filePath, JSON.stringify(obj), (error) =>{
            log = fs.readFileSync(filePath);
            log = JSON.parse(log);
            console.log(log);
            response.render('index', {currentVisits: log});
        });
        
    }