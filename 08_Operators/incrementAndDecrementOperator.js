// increment and decrement operator

let a = 10;
console.log("Initial value of a =", a);

// Increment operator
a++;
console.log("After incrementing, a =", a); // 11

// Decrement operator
a--;
console.log("After decrementing, a =", a); // 10   

// Pre-increment
console.log("Pre-increment:", ++a); // 11
console.log("Value of a after pre-increment:", a); // 11

// Post-increment
console.log("Post-increment:", a++); // 11
console.log("Value of a after post-increment:", a); // 12

// Pre-decrement
console.log("Pre-decrement:", --a); // 11
console.log("Value of a after pre-decrement:", a); // 11

// Post-decrement
console.log("Post-decrement:", a--); // 11
console.log("Value of a after post-decrement:", a); // 10

// Predict output
let x = 5;
console.log("Predict output - x++:", x++); // 5
console.log("Value of x after x++:", x); // 6
