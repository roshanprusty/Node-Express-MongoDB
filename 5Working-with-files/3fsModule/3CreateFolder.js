import fs, { mkdir, mkdirSync } from 'fs';

// fs.mkdirSync() //sync
// fs.mkdir() //async

// fs.mkdirSync("foo");
// console.log("folder successfully created");

//if folder already exist
// try{
//     if(!fs.existsSync('foo')){
//         fs.mkdirSync('foo');
//         console.log("directory created");
//     } else{
//         console.log("directory already exist");
//     }
// }catch(err){
//     console.log(err);
// }

//async way
fs.mkdir("foo3",function(err){
    if(err){
        console.log("error occured", err);
        return;
    }
    console.log("directory created");
})