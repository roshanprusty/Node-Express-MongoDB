// console.log('Code running');
// process.on('exit', function(code) {
//    return console.log(`exiting the code implicitly ${code}`);
// });


// The output will continue to appear on the screen until you press ctrl+c to exit from the code execution from the terminal. The execution stops after we press ctrl+c, and you are now exiting from the process.

//******************************************************************************************* */
// Using process.exit()
// console.log('Code running'); 
// process.on('exit', function(code) { 
// return console.log(`exiting the code implicitly ${code}`); 
// }); 
// setTimeout((function() { 
// return process.exit(22); //node js exit code  
// }), 1000); 
// setInterval((function() {
//    return console.log('code still running');
// }), 1000);

//******************************************************************************************* */
// Using process.kill()
// Another suitable method to terminate the Node.js process is to use the process.kill() function. The process.kill is a built-in Node.js method that takes different parameters to work properly. Below is the syntax of the process.kill() method. 

// process.kill(pid[, signal]) 

// pid is the process id and the signal is a string representing the signal names, such as SIGTERM, SIGINT, and SIGHUP. If you do not mention any signal name, it will consider the SIGTERM by default. These signals will transfer a small numeric message from one program to another