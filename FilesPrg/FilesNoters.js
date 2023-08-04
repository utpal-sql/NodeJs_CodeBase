const fs = require("fs");
const [,,noOfFiles] = process.argv;
console.log(noOfFiles);
const quote2 = "Live more , worry less ";

for(let i=0;i<=noOfFiles;i++)
{
    fs.writeFile(`./backup/note-${i}.html`,quote2,(err) => {
        console.log(`Complete writing test-${i}.html`);
    });
}