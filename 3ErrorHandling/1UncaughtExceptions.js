process.on("uncaughtException", err =>{
    console.log("UNCAUGHT EXCEPTION");
    console.log(err.name, err.message);
});
process.on("unhandledException", err =>{
    console.log("UNCAUGHT EXCEPTION");
    console.log(err.name, err.message);
});
let x=24;
console.log(x);
