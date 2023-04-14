// https://nodejs.org/api/fs.html
//Many are there don't need to learn syntax just follow website and find out syntax

// const fs = require('fs');
import fs, { fchownSync } from 'fs';
//file write in Synchronous
// fs.writeFileSync('myfile.txt',"This is content of file");
// console.log("file write done");

//file write async
// fs.writeFile('myfile2.txt',"Hello world async",function(err){
//     if(err) console.log("error occured", err);
//     else console.log("file created successfully");
// });
// console.log("file write async done");


//read file sync
// let data=fs.readFileSync('myfile.txt');
// console.log("Data of file : ",data.toString());

//read file async
fs.readFile('myfile.txt',function(err,data){
    if(err){
        console.log("error", err);
        return;
    } 
    console.log("Content of the file:", data.toString());
});
console.log("After file read");