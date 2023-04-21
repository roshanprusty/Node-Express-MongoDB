import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
if(__dirname == process.cwd()) console.log(true);
else console.log(false);
// console.log(__dirname);
// console.log(process.cwd()); 