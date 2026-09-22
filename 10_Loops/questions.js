
// Prectice
//1. print all even numbers from 0 to 100

// for (let i = 0; i <= 100; i++){
//     if(i % 2 !== 0){
//     console.log(i);
//     }
// }

//2. print all odd numbers from 0 to 100
// for (let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//     console.log(i);
//     }
// }

//3. Calculate how many vowels and consonants are in give string using for...of loop

// let str1 = "SurendraKumarPasi";
// let vowelsCount = 0;
// let consonantsCount = 0;

// for (let char of str1) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
//         vowelsCount++;
//     }
//     else{
//         consonantsCount++;
//     }
// }
//  console.log("Vowels = " + vowelsCount);
//  console.log("Consonants = " + consonantsCount);

// 4. Calculate sum of first `n` numbers.

// let n = Number(prompt("Enter a number:"));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += i;  
// }
// console.log("Sum of first " + n + " numbers = " + sum);

// 5. Calculate the sum of number `m` to `n` numbers.

// let m = Number(prompt("Enter the starting number (m):"));
// let n = Number(prompt("Enter the ending number (n):"));
// let sum = 0;   

// for(let i = m; i <= n; i++) {
//     sum += i;
// }
// console.log("Sum of numbers from " + m + " to " + n + " = " + sum);

// 6. Create a "Number Known" game.(Ask the user to keep guessing the number until the user enter the correct number.)

// let computerNumber = 10; 
// let userGuess;

// while(userGuess !== computerNumber) {
//     userGuess = Number(prompt("Enter the correct number:"));

//     if(isNaN(userGuess)) {
//         alert("Please enter a valid number.");
//     }
//     else if(userGuess < computerNumber) {
//         alert("Too low! Try again.");
//     }
//     else if(userGuess > computerNumber) {
//         alert("Too high! Try again.");
//     }
//     else {
//         alert("Congratulations! You guessed the correct number.");
//     }
// }

// 7. Simple password checker(Fixed Attempts)

// let password = "alpha";
// let userPassword = null;
// let noOfattempts = 0;

// while (password !== userPassword && noOfattempts < 3){
//     userPassword = prompt("Enter the password:");
//     noOfattempts++;

//     if(userPassword === password){
//         alert("Congratulations! you have entered the correct password.");
//     }
//     else if(noOfattempts >= 3){
//         alert("Your attempts is over, Sorry!");
//     }
//     else{
//         alert("Incorrect password. Please try again.");
//     }
// }

// 8. Create a program to find the factorial of a number `n`.

// let n = Number(prompt("Enter a number to find its factorial:"));
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }
// console.log("Factorial of " + n + " = " + factorial);


// 9. Print the following pattern 
    // 1
    // 1 2
    // 1 2 3
    // 1 2 3 4
    // 1 2 3 4 5

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}