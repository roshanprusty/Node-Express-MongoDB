const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    const rstream = fs.createReadStream("stream.txt");
    rstream.on('data', (readdata) => {
        res.write(readdata);
    })

    rstream.on("end", () => {
        res.end();
    })
})