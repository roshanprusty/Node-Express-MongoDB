//setImmediaate --> check handlers/queue
//process.nextTick
//setTimeout --> timer queue

function add(a,b){
    console.log(a+b);
}
setImmediate(()=>{
    console.log("*************SET IMMEDIATE*************");
    add(5,2);
});
setTimeout(()=>{
    console.log("*************SET TIMEOUT*************");
    add(5,2);
});
process.nextTick(()=>{
    console.log("*************PROCESS NEXT TICK*************");
    add(5,2);
});
console.log("*************HELLO HUMANS*************");

//1st process next tick will call then set timeout then set immediate
//process next tick < set timeout < set immediate