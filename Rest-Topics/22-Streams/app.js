import fs from 'fs';
import http from 'http';
import { User as user } from "./user.js";
// let server = new user();
const server = http.createServer();
server.on('request', (req, res) => {
    //here the PROBLEM is if there will be large data for capturing the whole data it would have taken many time which it can would the affect the perfomance
    // let rs = fs.readFile('./temp.txt', (err, data) => {
    //     if (err) res.end(err);
    //     else res.end(data);
    // })

    //Here data will get read --- chunk by chunk
    let rs = fs.createReadStream('./temp.txt');
    rs.on('data', (chunk) => {

        //here we will not use res.end bcz res.end means that all data has be written no more data will be written 

        // where as in stream we want to write data chunk by chunk so here we will use res.write
        res.write(chunk);
    })

    //end event we use when we don't have any data
    rs.on('end', () => {
        res.end();
    })
    rs.on('error', (error) => {
        res.end(error.message);
    })
})
server.listen(8000, '127.0.0.1', () => {
    console.log("server has started!")
})