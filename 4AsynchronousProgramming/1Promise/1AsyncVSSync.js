//synchronous vs Asynchronous code
//Sync --> It will run line by line
//Synchronous operations are executed in a sequential order, where each operation must wait for the previous operation to complete before it can begin. In other words, the program is blocked until each operation completes. Synchronous operations are easy to reason about and can be useful in some cases where we need to ensure that operations are executed in a specific order.
console.warn("------Sync------");
console.warn("hello");
console.warn("how are you");

//Async 
// Asynchronous operations, on the other hand, can be executed in any order and do not block the program while they are running. Asynchronous operations are useful when we need to perform operations that may take some time to complete, such as making network requests or reading files from the file system. Instead of waiting for these operations to complete before continuing with the program, we can continue executing other operations and handle the results of the asynchronous operations when they become available.
setTimeout(()=>{
    console.warn("--------Async-----------");
},2000);
console.warn("or bolo ky haal chal");