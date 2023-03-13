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
function promRec(funcPromises) {
    if (funcPromises.length === 0) return;
    const currPromise = funcPromises.shift();
    currPromise
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    promRec(funcPromises);
}
promRec([importantAction("roshan"),
        sayThankyou("roshan"),
        dish("roshan")]);
console.log("end");