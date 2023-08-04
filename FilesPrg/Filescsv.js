// test1.csv
// test2.csv
const fs = require("fs");
const quote2 = "Live more , worry less ";

for(let i=0;i<=10;i++)
{
    fs.writeFile(`./CSV/text-${i}.csv`,quote2,(err) => {
        console.log(`Complete writing test-${i}.csv`);
    });
}