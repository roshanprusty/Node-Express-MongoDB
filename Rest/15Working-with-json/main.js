import http from 'http';
import fs from 'fs';

let html = fs.readFileSync("index.html", 'utf-8');
let products = JSON.parse(fs.readFileSync("products.json", 'utf-8'));
let productsListHtml = fs.readFileSync("product-list.html", 'utf-8');
let productHtmlArray=products.map((prod)=>{
    let output =productsListHtml.replace('{{%IMAGE%}}',prod.productImage);
    output = output.replace('{{%NAME%}}', prod.name);
    output = output.replace('{{%MODELNAME%}}', prod.modeName);
    output = output.replace('{{%MODELNUMBER%}}', prod.modelNumber);
    output = output.replace('{{%SIZE%}}', prod.size);
    output = output.replace('{{%CAMERA%}}', prod.camera);
    output = output.replace('{{%PRICE%}}', prod.price);
    output = output.replace('{{%COLOR%}}', prod.color);

    return output;
})
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
            'Content-type': 'text/html'
        });
        response.end(html.replace('{{%Content%}}',productHtmlArray.join(' ')));
        // console.log(productHtmlArray);
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


//points to keep in mind
//you must read file in first only it's becoz while rendering it will be reading again n again.
//responce.writehead is very much important
//productHtmlArray stores all value it's bcz The productHtmlArray stores all data as an array of HTML strings. In the given code, it is created by looping through an array of products (stored in a JSON file) using the map() function, and replacing placeholders in a template HTML file (product-list.html) with data from each product. This results in an array of HTML strings that correspond to each product.
