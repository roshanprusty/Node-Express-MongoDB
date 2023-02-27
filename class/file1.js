const fs = require("fs");
fs.writeFile("fs.txt","i am the original data",(err)=>{
    console.log("file is created");
    console.log(err);
});
