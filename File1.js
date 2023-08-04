const fs = require("fs");

const quote = "Every day is a God day !!!";

fs.writeFile("Quatation.html",quote,(err) =>{
    console.log("Complete Log");
});