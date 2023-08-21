//You must take input from the user as filename and keep saving filenames in one array, in one separate text file

const prompt = require('prompt-sync')();
const quote2 = "Live more , worry less ";

const fs = require("fs");

let array = [];

for(let i=0;i<=2;i++)
{
const name = prompt('Please enter the file name ?');
array.push(name);
}
//console.log(array);

for(var i=0;i<array.length;i++){
    
    let file_name = array[i];
    
    fs.writeFile(`./Backup/${array[i]}.txt`,quote2,(err) => {
       console.log(`The File name is - ${file_name}.txt`);
       
    });
    
}


