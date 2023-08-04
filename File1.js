const fs = require("fs");

const quote = "Every day is a God day !!!";

fs.writeFile("Quotation.html",quote,(err) =>{
    console.log("Complete writing File");
});