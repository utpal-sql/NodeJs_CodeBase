const fs = require("fs");

fs.readdir("./Backup",(err,files)=>{
    console.log("Read all the files in directory,=>",files);
});