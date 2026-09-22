const numbers = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 22,33,44,21,32];


// number.pop(); // Removes the last element (5) from the array
// number.push(6); // Adds the element (6) to the end of the array
// number.shift(); // Removes the first element (1) from the array
// number.unshift(0); // Adds the element (0) to the beginning of the array

const animals = ["Dog", "Cat", "Elephant", "Lion", "Tiger", "Cow", "com"];
const number2 = [6, 7, 8, 9, 10,'surendra'];

const newArray1 = numbers.concat(animals); // Combines the numbers and animals arrays into a new array
const newArray2 = animals.concat(numbers, number2); // Combines the animals and numbers arrays into a new array


//const elementIndex = (numbers.indexOf(4));
//console.log(animals.indexOf("Elephant"));

//const isIncluded = (numbers.includes(3)); // true
//console.log(numbers.includes(13)); // false

//const animalsReverse = animals.reverse(); // Reverses the order of elements in the animals array

//const animalsSorted = animals.sort(); // Sorts the elements in the animals array in ascending order
//const numbersSorted = numbers.sort(); // Sorts the elements in the number2 array in ascending order

// const sliceAnimals = animals.slice(5); // it is create new array from index 5 to the end of the array
// const slicedAnimals = animals.slice(2,4); // Creates a new array containing elements from index 1 to index 3 (4 is not included)

// const spliceAnimals = animals.splice(2, 1); 
//const spliceAnimals2 = animals.splice(1, 4, "Horse", "Monkey"); // Adds "Horse" and "Monkey" at index 1 without removing any elements