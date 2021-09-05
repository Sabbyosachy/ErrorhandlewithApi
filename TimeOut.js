/* function A() {
    console.log('Fourth');
}
console.log('Im the first');
console.log('i am the second');
setTimeout(A, 7000);
console.log('i am the Third'); */

console.log('One');
setTimeout(function() {
    console.log('Two');
}, 4000);
setTimeout(() => {
    console.log('Five');
}, 3000);
console.log('three');