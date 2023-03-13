//setTimeout & clearTimeout
// console.warn("hello");
// const timeoutID = setTimeout((()=>{
//     console.warn("goodbye")
// }),3000);
// // clearTimeout(timeoutID);
// const timeoutID2 = setTimeout(seeYou,3000);
// clearTimeout(timeoutID2);
// function seeYou(){
//     console.warn("see you soon");
// }

//setInterval
let count=0;
const intID = setInterval(()=>{
    console.log(++count);
    if(count==5) clearInterval(intID);
},2000);
