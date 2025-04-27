'use strict';
const delayTwoSeconds = (callback) => {
    setTimeout(callback, 2000);
}
const p1 = new Promise((resolve, reject) => {
        resolve(1);
});
p1.then((result) => {
    console.log(result);
});
const p2 = new Promise((resolve, reject) => {
        reject('Promise failed');
        }
);
p2.catch((reject) => {
    console.log(reject);
});
function promiseNumber(num) {
    return new Promise((resolve, reject) => {
        resolve((num));
    });
}
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result) => {
    console.log(result);
})
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result) => {
    console.log(result);
})
async function asyncpromiseNumber() {
    try {
        const first = await Promise.all([1, 2, 3]);
        console.log (first);
        const second = await Promise.allSettled([1, 2, 3]);
        console.log (second);
    } catch (error) {
    console.log(error);
    }
}
asyncpromiseNumber();