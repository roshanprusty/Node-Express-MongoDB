import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
console.log(process.cwd());

// what is the difference between __dirname vs process.cwd()
// __dirname and process.cwd() are both used to retrieve the current working directory in Node.js, but there is a subtle difference between the two:

// __dirname returns the directory name of the current module, i.e., the directory that contains the file currently being executed.

// process.cwd() returns the current working directory of the Node.js process, i.e., the directory from which the process was launched.

// In most cases, __dirname and process.cwd() will return the same value, especially if the Node.js process was launched from the directory containing the file being executed. However, if the process was launched from a different directory, or if the file is being executed by a module that is required by another module, the two values may differ.

// To summarize, __dirname is usually the more reliable way to get the directory containing the currently executing file, while process.cwd() returns the current working directory of the process, which may or may not be the same as the directory containing the file.
