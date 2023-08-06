
const fs = require("fs");
fs.readFile("./ReadTest.txt","utf-8",(err,data) =>{
    if(err)
    {
        console.log("Error in files name ❌ ", err);
    }
    console.log("The content of the files is ==> ", data);
});