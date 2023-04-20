// Node.js program to demonstrate the
// process.env Property

// Include process module
import process from 'process';

// Printing process.env property value
var no_env = 0;

// Calling process.env
var env = process.env;

// Iterating through all returned data
for (var key in env) {
	
	// Print value
	console.log(key + ":\t\t\t" + env[key]);
	no_env++;
}

// Printing count
console.log("total no of values available = "
			+ no_env);

// Accessing one by one
console.log("operating system: " + env['OS']);
console.log("alluserprofile: " + env['ALLUSERSPROFILE']);
console.log("public directory: " + env['PUBLIC']);
