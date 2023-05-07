import http from 'http';
import fs from 'fs';

let html = fs.readFileSync("index.html", 'utf-8');
let products = JSON.parse(fs.readFileSync("products.json", 'utf-8'));
const server = http.createServer((request, response) => {
    let path = request.url;

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello-world'
        });
        response.end(html.replace('{{%Content%}}', 'You are in Home page'));
    }
    else if (path.toLocaleLowerCase() === '/about') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello-world'
        });
        response.end(html.replace('{{%Content%}}', 'You are in About page'));
    }
    else if (path.toLocaleLowerCase() === '/contact') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello-world'
        });
        response.end(html.replace('{{%Content%}}', 'You are in Contact page'));
    }
    else if (path.toLocaleLowerCase() === '/products') {
        response.writeHead(200, {
            'Content-type': 'application/json'
        });
        response.end("You are in product page")
    }
    else {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello-world'
        });
        response.end(html.replace('{{%Content%}}', 'ERROR:404 - Page not found'));
    }

});

server.listen(8000, '127.0.0.1', () => {
    console.log("server has started!");
})


