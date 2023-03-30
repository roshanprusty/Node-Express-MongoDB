const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("fs2.txt");
    rstream.pipe(res);
});
server.listen(4000,()=>{
    console.log("listening to port");
});