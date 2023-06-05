import http from 'http';
import fs from 'fs';
import url from 'url';
import {rh as replaceHtml} from './Modules/replaceHtml.js';
// const replaceHtml= require('./Modules/replaceHtml');

let html = fs.readFileSync("index.html", 'utf-8');
let products = JSON.parse(fs.readFileSync("products.json", 'utf-8'));
let productsListHtml = fs.readFileSync("product-list.html", 'utf-8');

// function replaceHtml(template, product) {
//     let output = template.replace('{{%IMAGE%}}', product.productImage);
//     output = output.replace('{{%NAME%}}', product.name);
//     output = output.replace('{{%MODELNAME%}}', product.modeName);
//     output = output.replace('{{%MODELNUMBER%}}', product.modelNumber);
//     output = output.replace('{{%SIZE%}}', product.size);
//     output = output.replace('{{%CAMERA%}}', product.camera);
//     output = output.replace('{{%PRICE%}}', product.price);
//     output = output.replace('{{%COLOR%}}', product.color);
//     output = output.replace('{{%ID%}}', product.id);

//     return output;
// }

const server = http.createServer((request, response) => {
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

});

server.listen(8000, '127.0.0.1', () => {
    console.log("server has started!");
})


