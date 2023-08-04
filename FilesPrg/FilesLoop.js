// test1.html
// test2.html
const fs = require("fs");
const quote2 = "Live more , worry less ";

for(let i=0;i<=10;i++)
{
    fs.writeFile(`./backup/text-${i}.html`,quote2,(err) => {
        console.log(`Complete writing test-${i}.html`);
    });
}