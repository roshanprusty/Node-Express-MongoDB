//callback :  a callback is a function that is passed as an argument to another function and is executed when that function has finished its task.
// https://www.youtube.com/watch?v=1zCXuwjEsNs

// const a =10;
// const b=25;
// function sayHi(){
//     console.log("hiiii");
// }
// function sum(num1, num2, hi){
//     console.log(num1+num2);
//     hi();
// }
// sum(a,b,sayHi);

//-----------------------------------------------------------------------------------------------------------
// console.warn("start");
// function importantAction(username){
//     setTimeout(function(){
//         return `hello how are you ${username}`;
//     },2000);
// }
// const message = importantAction("roshan");
// console.warn(message);
// console.warn("stop")
// o/p ->
// start
// undefined
// stop

//-----------------------------------------------------------------------------------------------------------
//with the help of callback we can able to achieve this.
// console.warn("start");
// function importantAction(username,cb){
//     setTimeout(function(){
//         cb(`hello how are you ${username}`);
//     },2000);
// }
// const message = importantAction("roshan", function(message){
//     console.warn(message);
// });
// console.warn("stop")
// o/p 
// start
// stop
// hello how are you roshan
// <-----example of Asunchronous code ----->

//-----------------------------------------------------------------------------------------------------------
// console.warn("start");
// function importantAction(username,cb){
//     setTimeout(function(){
//         cb(`hello how are you ${username}`);
//     },2000);
// }
// function sayThankyou(username,cb){
//     setTimeout(function(){
//         cb(`${username} thank you for your contribution`);
//     })
// }
// function dish(username,cb){
//     setTimeout(function(){
//         cb(`${username} what is your favourite dish?`);
//     })
// }
// const message = importantAction("roshan", function(message){
//     console.warn(message);
//     sayThankyou("roshan",function(message){
//         console.warn(message);
//         dish("roshan",function(message){
//             console.warn(message);
//         });
//     });
// });

// these callback functions has made our code a little bit messy so if we were to let's say if you had more such callback functions right because obviously when we are working in a company or a production code our code won't look this simple right it will have more nested functions inside of it like this so you see this is a weird looking code structure it's forming a pyramid-like structure which is also sometimes called as pyramid of doom and this concept is called callback hell it's because we're having so many nested callbacks one inside of the other that it's very hard to read and very hard to understand our code so what do you think is the solution for this problem promise comes into play.

// console.warn("stop")


