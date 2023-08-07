const fs = require("fs");

fs.readFile("./user.json",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        const user = JSON.parse(data);
        console.log(user);
        console.table(user);

        for(i=0;i< user.length;i++)
        {
            console.log(user[i].name, "-" ,user[i].role);
        }
    }
});