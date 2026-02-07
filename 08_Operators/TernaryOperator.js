// Ternary Operator in javaScript

// syntax: condition ? expressionIfTrue : expressionIfFalse;

let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote yet.";
console.log(canVote); // Output: Yes, you can vote.

let number = 7;
let type = (number % 2 === 0) ? "Even" : "Odd";
console.log(`${number} is an ${type} number.`); // Output: 7 is an Odd number.


// Question :
// 1. On a booking website, check if Age should be at least 18.Write a condition to check and display a message: "Eligible for booking" if the user 18 or older. "Not eligible for booking" otherwise.

let userAge = 16;
let bookingMessage = (userAge >= 18) ? "Eligible for booking" : "Not eligible for booking";
console.log(bookingMessage); // Output: Not eligible for booking

// 2. Given a number, use the ternary operator to determine if it is positive, negative, or zero. Display an appropriate message for each case.
let num = -5;
let numberType = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log(`The number ${num} is ${numberType}.`); // Output: The number -5 is Negative.

// 3. In a shopping application, check if the total purchase amount exceeds $100. If it does, apply a 10% discount and display the final amount. If not, display the original amount.
let purchaseAmount = 120;
let finalAmount = (purchaseAmount > 100) ? purchaseAmount * 0.9 : purchaseAmount;
console.log(`The final amount to be paid is $${finalAmount}.`); // Output: The final amount to be paid is $108.

// 4. Given a student's score, use the ternary operator to determine if the student has passed or failed. A score of 50 or more is considered a pass. Display "Passed" or "Failed" accordingly.
let score = 45;
let result = (score >= 50) ? "Passed" : "Failed";
console.log(`The student has ${result}.`); // Output: The student has Failed.   

