const fs = require("fs");

fs.readdir("./CSV",(err,data)=>{
    data.forEach((element) => {
        fs.unlink(`./CSV/${element}`,(err)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(`Deleted successfully ${element}`);
            }
        });
        
    });
});