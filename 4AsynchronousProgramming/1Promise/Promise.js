// promise : A promise is an object that returns a IDBCursorWithValue, which you hope to receive in the future, but not now. 

//Why we need Promise :JS is always synchronous and single-threaded language. it means js never wait for code or function result they take some time. JS direct excute next code

//production code
// let data = new Promise(function(resolved, ejected){
//     resolved("done");
// });

//consuming code
// data.then((resp)=>{
//     console.warn("resp",resp)
//     return resp;
// })

// let data =1;
// console.warn(data);
// data=2;
// setTimeout(()=>{
//     console.warn(data);
// },2000)
// data=3;
// console.warn("last", data);
//output  
// 1
// last 3
// 3  --> output came wrong -- we was wanting to come 2 but it came 3 ---> to deal this problem promise came into play

let data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "roshan", age: 29 });
    }, 2000)
});
data.then((data) => {
    console.warn(data);
});
console.warn("hello");
