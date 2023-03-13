//Modern way approach to handle promise
//best way to execute one after another
//one of the cleanest way
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
        }, 500)
    });
}
const result = async () =>{
    try{
        const msg1 = await importantAction("roshan");
        console.log(msg1);
        const msg2 = await sayThankyou("roshan");
        console.log(msg2);
        const msg3 = await dish("roshan");
        console.log(msg3);

        // console.log({msg1, msg2, msg3});
    }catch(error){
        console.log("promise failed", error);
    }
}
result();
console.warn("stop");