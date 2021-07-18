const fs = require('fs');


const log = (_data)=>{

    fs.writeFile('debug.txt',_data, (err)=>{
        if(err) return console.log(err);
        console.log('File is created successfully');
    });

}

module.exports.logger = log;