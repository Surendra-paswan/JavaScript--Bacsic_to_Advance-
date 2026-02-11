// let day = prompt("Enter the day of the week (e.g., Monday, Tuesday, etc.):");

// if(day.toLowerCase() === "monday") {
//     console.log("It's Monday! Start of the workweek.");
// }
// else if(day.toLowerCase() === "tuesday") { 
//     console.log("It's Tuesday! Keep going.");
// }
// else if(day.toLowerCase() === "wednesday") {
//     console.log("It's Wednesday! Halfway through the week.");
// }
// else if(day.toLowerCase() === "thursday") {
//     console.log("It's Thursday! Almost there.");
// }
// else if(day.toLowerCase() === "friday") {
//     console.log("It's Friday! The weekend is near.");
// }
// else if(day.toLowerCase() === "saturday") {
//     console.log("It's Saturday! Time to relax.");
// }
// else if(day.toLowerCase() === "sunday") {
//     console.log("It's Sunday! Enjoy your day off.");
// }
// else {
//     console.log("Invalid input. Please enter a valid day of the week.");
// }




let day = prompt("Enter the day of the week (e.g., Monday, Tuesday, etc.):");

switch (day.toLowerCase()) {
    case "monday":
        console.log("It's Monday! Start of the workweek.");
        break;
    case "tuesday":
        console.log("It's Tuesday! Keep going.");
        break;
    case "wednesday":
        console.log("It's Wednesday! Halfway through the week.");
        break;
    case "thursday":
        console.log("It's Thursday! Almost there.");
        break;
    case "friday":
        console.log("It's Friday! The weekend is near.");
        break;
    case "saturday":
        console.log("It's Saturday! Time to relax.");
        break;
    case "sunday":
        console.log("It's Sunday! Enjoy your day off.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}
