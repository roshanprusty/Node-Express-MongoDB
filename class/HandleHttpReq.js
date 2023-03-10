import * as http from 'http';
var server = http.createServer(function(req, res){
    if(req.url=='/') res.end("Welcome to Index page");
    else if(req.url=="/emp") res.end("Welcome to Employees page");
    else res.end ("Invalid request of the user");
});
server.listen(1000);
console.warn("Server is running at port 1000 ");