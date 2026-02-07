// Logical Operators in JavaScript

console.log(false && false); // false
console.log(false && true);
console.log(true && false);
console.log(true && true); // true

console.log(false || false); // false
console.log(false || true); // true
console.log(true || false); // true
console.log(true || true); // true  

console.log(!false); // true
console.log(!true); // false    

let x = 10;

console.log((x > 5) && (x < 15)); // true
console.log((x < 5) || (x < 15)); // true
console.log(!(x === 10)); // false
