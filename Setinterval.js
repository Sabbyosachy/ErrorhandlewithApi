/* let a = 0;
const time = setInterval(() => {
    a++;
    console.log(a);
    if (a > 15) {
        clearInterval(time);
    }
}, 1000); */

let a = 0;
const time = setInterval(() => {
    a++;
    console.log(a);
    if (a < 10) {
        clearInterval(time);
    }
}, 500);