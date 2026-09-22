let userName = "John";

let user = {
   firstName: "John",
   lastName: "Doe",
   age: 30,
    address: {
        city: "New York",
        country: "USA",
        moreDetails: {
            postalCode: 10001,
            state: "NY"
        }
    }
};

Object.seal(user); // seal mean key and values can not deleted and new  key and value added but existing key and value can be modified.
Object.freeze(user); // freeze mean  key and value can not deleted, new  key and value can not added and existing key and value can not be modified.

console.log('age' in user); // true
// in keyword is used to check if a key exists in an object or not. it will return true if the key is not exists in the object then it will return false.