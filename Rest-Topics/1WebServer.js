import fs from 'fs';
import http from 'http';

let value="Unable to fetch data from json file";
fs.readFile('./index.html',function(err,data){
    if(err){
        console.log(err);
        return;
    } 
    value=data;
})

//create s server
const server=http.createServer((request, responce)=>{
    // responce.end(value.toString()) 
    responce.end(value) //you can also send a html responce
    console.log("A new request recieved");
});

//http://127.0.0.1:8000/
server.listen(8000, '127.0.0.1', () =>{
    //it will come in each new request
    console.log("server has started!");
})

