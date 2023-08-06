const fs = require("fs");

const niceQuote = "\n Have a nice Day"

fs.appendFile("./ReadTest.txt",niceQuote,(err) => {
    console.log("Complete Append files");
});