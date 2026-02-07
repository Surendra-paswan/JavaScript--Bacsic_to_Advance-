// Bitwise Operators in JavaScript

let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

console.log("a & b =", a & b); // AND: 0001 -> 1
console.log("a | b =", a | b); // OR:  0111 -> 7
console.log("a ^ b =", a ^ b); // XOR: 0110 -> 6
console.log("~a =", ~a);
// NOT: 1010 -> -6 (Two's complement representation)
console.log("a << 1 =", a << 1); // Left Shift: 1010 -> 10
console.log("a >> 1 =", a >> 1);
// Right Shift: 0010 -> 2
console.log("a >>> 1 =", a >>> 1); // Unsigned Right Shift: 0010 -> 2

// Demonstrating bitwise operations with negative numbers
let c = -5; // Binary: ...11111011 (32-bit representation)
console.log("c & b =", c & b);
console.log("c | b =", c | b);
console.log("c ^ b =", c ^ b);
console.log("~c =", ~c);
console.log("c << 1 =", c << 1);
console.log("c >> 1 =", c >> 1);
console.log("c >>> 1 =", c >>> 1);


// Explanation:
// Bitwise operators work on the binary representation of numbers.
// For positive numbers, the binary representation is straightforward.
// For negative numbers, JavaScript uses two's complement representation.
// The unsigned right shift (>>>) treats the number as unsigned, which can lead to unexpected results with negative numbers.