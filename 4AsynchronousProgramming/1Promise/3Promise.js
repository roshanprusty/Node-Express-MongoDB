// console.warn("start");
// const sub = new Promise((resolve, reject) => {
//     const results = false;
//     setTimeout(() => {
//         if (results === true) resolve("It's True");
//         else reject(new Error("It's False"));
//     }, 2000)
// });

// sub
//     .then((res) => {
//         console.warn(res);
//     })
//     .catch((err) => {
//         console.warn(err);
//     });
// console.warn("stop");

// --->In SIMPLER WAY 
// console.log("start");
// const sub =Promise.resolve("resolved");
// console.log(sub);
// sub.then((res)=> console.log(res)).catch((err)=>console.log(err));
// console.log("stop");

//solving 2Callback code using promise
// console.warn("start");
// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(`hello how are you ${username}`);
//         }, 2000);
//     })
// }
// function sayThankyou(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(`${username} thank you for your contribution`);
//         }, 2000)
//     });
// }
// function dish(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(`${username} what is your favourite dish?`);
//         }, 2000)
//     });
// }
// importantAction("roshan").then((res)=>{
//     console.log(res);
//     sayThankyou("roshan").then((res)=>{
//         console.log(res);
//         dish("roshan").then((res)=>{
//             console.log(res);
//         });
//     });
// }).catch((err)=>{
//     console.log(err);
// });
// console.log("stop");

//now see it's more cleaner :)
//but you might one question that okay we have little bit cleaner code but again it pyramid doming ~ TO DEAL THIS PROMISE CHAINING comes into concept
// console.warn("start");
// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(`hello how are you ${username}`);
//         }, 2000);
//     })
// }
// function sayThankyou(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(`${username} thank you for your contribution`);
//         }, 2000)
//     });
// }
// function dish(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(`${username} what is your favourite dish?`);
//         }, 2000)
//     });
// }
// importantAction("roshan")
//     .then((res) => {
//         console.log(res);
//         return sayThankyou("roshan");
//     })
//     .then((res) => {
//         console.log(res);
//         return dish("roshan");
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// console.log("stop");

//Then also it looks lengthy
//we have PROMISE COMBINATOR which it will make super easy
//1. Promise.all
// console.warn("start");
// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(`hello how are you ${username}`);
//         }, 2000);
//     })
// }
// function sayThankyou(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             reject(`${username} thank you for your contribution`);
//         }, 2000)
//     });
// }
// function dish(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(`${username} what is your favourite dish?`);
//         }, 2000)
//     });
// }
// Promise.all([
//     importantAction("roshan"),
//     sayThankyou("roshan"),
//     dish("roshan"),
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error: Promises failed " + err);
// });
// console.log("stop");
//but one problem with Promise.all is that if any one of the promise get reject then it will show reject one only :(

//2. Promise .race 
console.warn("start");
function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(`hello how are you ${username}`);
        }, 2000);
    })
}
function sayThankyou(username) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(`${username} thank you for your contribution`);
        }, 2000)
    });
}
function dish(username) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(`${username} what is your favourite dish?`);
        }, 2000)
    });
}
Promise.race([
    importantAction("roshan"),
    sayThankyou("roshan"),
    dish("roshan"),
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error: Promises failed " + err);
});
console.log("stop");
//it will return that function which it will execute first 

//3. allSettled ~ it will retun the resolve promise as well as reject not like all.

//4. any ~ it will return resolved promise and ignore reject one
            // Que ~ if all promises are failed?
            // ans ~ it will refect "All Promises are failed"

