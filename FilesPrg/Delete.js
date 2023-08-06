const fs = require("fs");


const niceQuote = "\n Have a nice Day"

fs.unlink("./Tobedeleted.txt",niceQuote,(err) => {
    console.log("Delete files Completed");
});