// const user1 = {
//   Name: "Surendra",
//   Age: 21,
//   City: "Lumbini",
//   Country: "Nepal",
//   isMarrid: false,
//   Hobbies: "Software Engineer",
//   Education: "Bachelors in Computer Science",
//   Profession: "Software Engineer",
// };

// const user2 = {
//   Name: "Dipendra",
//   "last-Name": "paswan",
//   Age: 21,
//   City: "Lumbini",
//   Country: "Nepal",
//   isMarrid: false,
//   Hobbies: "Software Engineer",
//   Education: "Bachelors in Computer Science",
//   Profession: "Software Engineer",
//   surendra: "Developer",
// };

// const myName = "surendra";

// const userName1 = "";
// const userName2 = "";

// console.log(user1.Name);
// console.log(user2["Name"]);
// // console.log(user2.last - Name); // This will give an error because of the hyphen in the property name. It is treated as a subtraction operation.
// console.log(user2["last-Name"]); // we have to use bracket notation to access properties with special characters or spaces in their names.

// console.log(user2.myName); // undefined
// console.log(user2[myName]);
// console.log(user2.surendra); // Developer

// const user3 = {
//   firstName: "Anurag",
// };

// console.log(user3["first"]); // undefine
// console.log(user3["first" + "Name"]) //Anurag

// How to update key value pair in an object
// const user =
// {
//     name: "Surendra",
//     gender: "Male",
// }

// user.Age = 21; // Adding a new property to the object
// // user.is-studetn = true; //error because of the hyphen in the property name. It is treated as a subtraction operation.
// user["is-student"] = true; // we have to use bracket notation to add properties with special characters or spaces in their names

// we can discuss one object  in one or more object include

const user1 = {
  name: "Surendra",
  age: 21,
  city: "Lumbini",
  address: {
    country: "Nepal",
    state: "Lumbini",
    postalCode: 32900,
    moreDetails: {
      landmark: "Lumbini Garden",
      nearbyPlaces: {
        place1: "Maya Devi Temple",
        place2: "Lumbini Museum",
      },
    },
  },
};

user1.address.state = "Rupandeh"; // Updating the state property of the address object
