import http from 'http';
import fs from 'fs';
import url from 'url';
import event from 'events';


import { User as user } from './user.js';

let html = fs.readFileSync("index.html", 'utf-8');
let products = JSON.parse(fs.readFileSync("products.json", 'utf-8'));
let productsListHtml = fs.readFileSync("product-list.html", 'utf-8');
// let product
function replaceHtml(template, product) {
    let output = template.replace('{{%IMAGE%}}', product.productImage);
    output = output.replace('{{%NAME%}}', product.name);
    output = output.replace('{{%MODELNAME%}}', product.modeName);
    output = output.replace('{{%MODELNUMBER%}}', product.modelNumber);
    output = output.replace('{{%SIZE%}}', product.size);
    output = output.replace('{{%CAMERA%}}', product.camera);
    output = output.replace('{{%PRICE%}}', product.price);
    output = output.replace('{{%COLOR%}}', product.color);
    output = output.replace('{{%ID%}}', product.id);

    return output;
}

const server = http.createServer();
server.on('request', (request, response)=>{
    let { query, pathname: path } = url.parse(request.url, true);

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
        if (!query.id) {
            let productHtmlArray=products.map((prod)=>{
                return replaceHtml(productsListHtml, prod);
            })
            // let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.end(html.replace('{{%Content%}}',productHtmlArray.join(' ')));
        } else {
            response.end("This is a product with ID = " + query.id);
        }

    }
    else {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello-world'
        });
        response.end(html.replace('{{%Content%}}', 'ERROR:404 - Page not found'));
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("server has started!");
})

/* This code is creating an instance of the `EventEmitter` class from the `events` module in Node.js.
It then defines two event listeners for the `userCreated` event, which will be triggered when the
event is emitted. Finally, it emits the `userCreated` event with the arguments `101` and `'Roshan'`,
which will trigger the two event listeners and log messages to the console. This code demonstrates
the use of event-driven programming in Node.js. */
let myEmitter = new user();

myEmitter.on('userCreated', (id,name)=>{
    console.log(`A new user ${name} with ID ${id} is created!`);
})
myEmitter.on('userCreated', (id,name)=>{
    console.log(`A new user ${name} with ID ${id} is added to Database!`);
})

myEmitter.emit('userCreated', 101, 'Roshan');