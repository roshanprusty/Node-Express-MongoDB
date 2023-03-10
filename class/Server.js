// const http = require("http");
import http from "http";
const server =http.createServer((req,res)=>{
    res.write("hello i am a response");
    res.write("hello i am a rnp");
    console.log(req.url);
    
});
server.listen(999,()=>{
    console.log("listening to port number 999");
});