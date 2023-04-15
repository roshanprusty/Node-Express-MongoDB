import fs from 'fs';
// fs.rmdirSync() //sync
// fs.rmdir() //async

// fs.rmdirSync("FOO");
// console.log("file deleted sucessfully");

//If file not exist or incase any error
// try{
//     fs.rmdirSync("FOO");
//     console.log("file deleted sucessfully");
// }catch(err){
//     console.log("ERROR");
//     console.log(err);
// }

fs.mkdirSync("foo");
fs.rmdir("foo",function(err){
    if(err){
        console.log("error");
        console.log(err);
    }else{
        console.log("folder deleted succesfully");
    }
})

