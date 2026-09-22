const fruitsCollection = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Grapes",
//   { name: "Surendra" },
//   [1, 3,4,5]
];

// console.log(fruitsCollection[3]);
// fruitsCollection[2] = "Pineapple"; // Replacing "Orange" with "Pineapple"
// fruitsCollection[5] = "Strawberry"; // Adding a new fruit at index 5
fruitsCollection[fruitsCollection.lenght] = "Watermelon"; // Adding a new fruit at the end of the array
fruitsCollection.push("Papaya"); // Adding a new fruit at the end of the array using push method
fruitsCollection.push("skp", 23 , "surendra"); // Adding multiple elements at the end of the array using push method
fruitsCollection.pop(); // Removing the last element from the array using pop method
fruitsCollection.shift(); // Removing the first element from the array using shift method

const newArray = [1,2, {names: "surendra"}];
newArray.firsName = 'skp';

const newObject = {}