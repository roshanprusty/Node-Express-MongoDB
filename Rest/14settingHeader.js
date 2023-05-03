import http from 'http';
import fs from 'fs';

let html = fs.readFileSync("index.html", 'utf-8');

const server = http.createServer((request, response) => {
    let path = request.url;

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello-world'
        });
        response.end(html.replace('{{%Content%}}', 'You are in Home page'));
    }
    else if (path.toLocaleLowerCase() === '/about'){
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello-world'
        });
        response.end(html.replace('{{%Content%}}', 'You are in About page'));
    } 
    else if (path.toLocaleLowerCase() === '/contact'){
        response.end(html.replace('{{%Content%}}', 'You are in Contact page'));
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello-world'
        });
    } 
    else{
        response.writeHead(404, {
            'Content-Type': 'text/html',
            'my-header': 'Hello-world'
        });
        response.end(html.replace('{{%Content%}}', 'ERROR:404 - Page not found'));
    } 

});

server.listen(8000, '127.0.0.1', () => {
    console.log("server has started!");
})


// key thing to REMEMBER
//200,404 are the status code -- 200 means it exist where as 404 stands for not exist
//Header --> to send additional information along with the HTTP response or request
//for more details --> Have a look -- https://www.youtube.com/watch?v=gY2VK-vdE68&list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS&index=14