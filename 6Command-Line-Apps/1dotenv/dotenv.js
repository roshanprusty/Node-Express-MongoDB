import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import * as dotenv from 'dotenv'
if(process.env.Node_ENV){
    dotenv.config({
        path:`${__dirname}/.env${process.env.NODE_ENV}`
    });
} else{
    dotenv.config();
}
console.log(`${__dirname}/.env${process.env.NODE_ENV}`);
console.log(process.env.MY_VAR);
console.log(process.env.NUMBER);