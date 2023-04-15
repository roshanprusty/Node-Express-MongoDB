import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// readdirSync() //sync
// readdir() //async

//async
// fs.readdir("D:/language/Node JS/5working-with-files/3fsModule",function(err,data){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("The content of the file ",data);
// })

//sync
// let data=fs.readdirSync(__dirname);
// console.log(data);