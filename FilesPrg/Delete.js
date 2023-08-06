const fs = require("fs");

const niceQuote = "Have a nice Day"

fs.unlink("./Tobedeleted.txt",(err) => {
    console.log(`Delete files Completed`);
});
