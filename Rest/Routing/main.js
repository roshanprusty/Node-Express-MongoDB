import http from'http';
import fs from 'fs';

let html=fs.readFileSync("index.html",'utf-8');

const server=http.createServer((request,response)=>{
    // response.end(html) 
    // console.log("A new request recieved");
    let path = request.url; //through request.url we can get resource url what the user typed
    // response.end(path); //whatever we give it will reflect that

    if(path==='/' || path.toLocaleLowerCase()==='/home') response.end(html.replace('{{%Content%}}','You are in Home page'));
    else if(path.toLocaleLowerCase()==='/about') response.end(html.replace('{{%Content%}}','You are in About page'));
    else if(path.toLocaleLowerCase()==='/contact') response.end(html.replace('{{%Content%}}','You are in Contact page'));
    else response.end(html.replace('{{%Content%}}','ERROR:404 - Page not found'));
    
});

server.listen(8000, '127.0.0.1', () =>{
    console.log("server has started!");
})