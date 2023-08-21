//Next time when user again executes the code ask user to provide filename. Check if file
//already exists, if yes then ask user to give new filename. Write simple text ‘You are awesome’ in every
//new file

const fs = require("fs");
const prompt = require('prompt-sync')();

const quote2 = "You are awesome ";


const name = prompt('Please enter the file name ?');

const path = `./Backup/${name}.txt`

console.log(path);

try {
  if (fs.existsSync(path)) {
    console.log(`File Name ${name}.txt Already Exists ! Please Enter New File Name.`)
  }
  else
  {
    fs.writeFile(`./backup/${name}.txt`,quote2,(err) => {
        console.log(`Complete writing ${name}.txt`);
    });
  }
} catch(err) {
  console.error(err)
}

