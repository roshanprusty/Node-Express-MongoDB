import * as http from 'http';
import fs from 'fs';
var server = http.createServer(function(req, res){
    if(req.url=='/') res.end("Welcome to Index page");
    else if(req.url=="/fs"){
        let temp=fs.readFileSync("./fs.txt");
        res.end(temp);
    }
    else if(req.url=="/fs2"){
        let temp=fs.readFileSync("./fs2.txt");
        res.end(temp);
    }
    else res.end ("404 ERROR NOT FOUND");
});
server.listen(1000);
console.warn("Server is running at port 1000 ");