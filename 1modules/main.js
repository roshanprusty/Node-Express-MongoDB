// const test = require("./test.js");
// const test1 = require("./test1.js");

//In above ---> this is working in syncronize way first it will run test then test1 while in browser we do in insyncronize way so to deal this ES modules are a newer module system that was introduced in ECMAScript 6. They use the import and export keywords

// import test from "./test.js"
// import test1 from "./test1.js"

//we can do destructring also in ES modules in Node.js

import test, {firstname} from "./test.js"
import test1,{b as world} from "./test1.js"

console.log(test,firstname);
console.log(test1,world);