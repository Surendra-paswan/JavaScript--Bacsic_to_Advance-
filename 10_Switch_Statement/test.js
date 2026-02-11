// let dayNumber = prompt("Enter the day number (1-7):");

// if(dayNumber === "1") {
//     console.log("It's Monday! Start of the workweek.");
// }
// else if(dayNumber === "2") {
//     console.log("It's Tuesday! Keep going.");
// }
// else if(dayNumber === "3") {
//     console.log("It's Wednesday! Halfway through the week.");
// }
// else if(dayNumber === "4") {
//     console.log("It's Thursday! Almost there.");
// }
// else if(dayNumber === "5") {
//     console.log("It's Friday! The weekend is near.");
// }
// else if(dayNumber === "6") {
//     console.log("It's Saturday! Time to relax.");
// } 
// else if(dayNumber === "7") {
//     console.log("It's Sunday! Enjoy your day off.");
// }
// else {
//     console.log("Invalid input. Please enter a number between 1 and 7.");
// }


let dayNumber = prompt("Enter the day number (1-7):");
switch (dayNumber) {
    case "1":
        console.log("It's Monday! Start of the workweek.");
        break;
    case "2":
        console.log("It's Tuesday! Keep going.");
        break;
    case "3":
        console.log("It's Wednesday! Halfway through the week.");
        break;
    case "4":
        console.log("It's Thursday! Almost there.");
        break;
    case "5":
        console.log("It's Friday! The weekend is near.");
        break;
    case "6":
        console.log("It's Saturday! Time to relax.");
        break;
    case "7":
        console.log("It's Sunday! Enjoy your day off.");
        break;
    default:
        console.log("Invalid input. Please enter a number between 1 and 7.");
}
