import fs from 'fs';

import { User as user } from "./user.js";
let server = new user();
server.on(request, (req,res)=>{
    let rs = fs.readFile('./temp.txt', (err,data) =>{
        if(err) res.end(err);
        else res.end(data);
    });
})