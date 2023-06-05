import fs from 'fs';
import http from 'http';

const server = http.createServer();
// server.on('request', (req, res) => {
//     let rs = fs.createReadStream('./temp.txt');
//     rs.on('data', (chunk) => {
//         res.write(chunk);
//     })
//     rs.on('end', () => {
//         res.end();
//     })
//     rs.on('error', (error) => {
//         res.end(error.message);
//     })
// })
// server.listen(8000, '127.0.0.1', () => {
//     console.log("server has started!")
// })

//In stream what is happening is while reading stream can read quickly where as while writing it take little longer time to write for which write stream face back-pressure which lead to problem in perfomance ~~ to deal with this problem Pipe got introduced and its solving the problem

server.on('request', (req,res)=>{
    let rs = fs.createReadStream('./temp.txt');
    rs.pipe(res); 
    
})

server.listen(8000, '127.0.0.1', () => {
    console.log("server has started!")
})

//using pipe it carry 2 advantage first, it solves break-pressure and second, we don't need to write so much only this much code is enough