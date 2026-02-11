// let num = prompt("Enter a number");

// if (num > 0) {
    
//     if (num % 2 === 0) {
//         console.log("Number is Positive and Even");
//     } else {
//         console.log("Number is Positive and Odd");
//     }

// } else {
//     console.log("Number is Negative or Zero");
// }

let marks = 65;

if (marks >= 50) {

    // Nested if inside IF
    if (marks >= 75) {
        console.log("Pass with Distinction");
    } else {
        console.log("Pass");
    }

} else {

    // Nested if inside ELSE
    if (marks >= 40) {
        console.log("Fail but Eligible for Re-exam");
    } else {
        console.log("Fail");
    }

}
