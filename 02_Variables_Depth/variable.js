// // console is an output function that prints messages to the web console
// console.log("Hello, World!");

// // It is single line comment

// /*
//     This is a multi-line comment
//     You can write comments
//     on multiple lines
// */

// // Variable declaration and initialization
// Difference between var, let, and const

// let age;  // declaring a variable named 'age'
// age = 25;  // initializing the variable 'age' with the value 25
// console.log(age);  // Output the value of 'age' to the console


// let name = "surendra kumar pasi";  // declaring and initializing a variable named 'name' with the value "surendra kumar pasi"
// console.log(name);  // Output the value of 'name' to the console    

// let a;
// let b;

// a = 10;
// b = 20;

// console.log(a);
// console.log(b);


// var city = "New York"; // Using 'var' to declare a variable
// console.log(city)
// var city = "lumbini"; // Reassigning the variable
// console.log(city)

// let city = "moglaha"; // Using 'let' to declare a variable
// console.log(city)
// let city = "pokhara";  //Error: Identifier 'city' has already been declared
// console.log(city)


// const pi = 3.14; // Using 'const' to declare a constant variable
// console.log(pi);
// pi = 3.14159; // Error: Assignment to constant variable.

// Rules for variable names in JavaScript:
// 1. variable names is case sensitive
// 2. variable names can contain letters, digits, underscores, and dollar signs
// 3. variable names must begin with a letter, an underscore (_), or a dollar sign ($)
// 4. reserved words (like JavaScript keywords) cannot be used as variable names

// let number = 10;
// console.log(Number); // Error: 'Number' is not defined
// console.log(number); // Output: 10

// let firstName = "surendra";
// let _name = "Alice";
// let $age = 30;

// let function = "myFunction"; // Valid variable name, but not recommended
// let full name = "surendra kumar pasi"; // Error: Unexpected identifier

// //let #salary = 5000; // Error: Invalid or unexpected token

// console.log(firstName)
// console.log(_name)
// console.log($age)


// data types in JavaScript
//1. Primitive Data Types (number, string, boolean, null, undefined, symbol, bigint)

// let age = 25; // number data type
// console.log(typeof(age));

// let name = "surendra"; // string data type
// console.log(typeof(name));

// let isStudent = true; // boolean data type
// console.log(typeof(isStudent));

// let score = null; // null data type
// console.log(typeof(score));

// let address; // undefined data type
// console.log(typeof(address));

// let uniqueId = Symbol("id"); // symbol data type
// console.log(typeof(uniqueId));

// let bigNumber = 9007199254740991n; // bigint data type. it implcit conversion
// console.log(typeof(bigNumber));

// let num = BigInt(12345678901234567890); // another way to create bigint. it is explicit conversion
// console.log(typeof(num));


// //2. Non-Primitive Data Types (object, array, function)
// let persong = {
//     name: "surendra",
//     age: 25
// };
// console.log(typeof(persong));

// let numbers = [1, 2, 3, 4];
// console.log(typeof(numbers)); // arrays are of type object

// function add(a, b)
// {
//     return a + b;
// }
// console.log(add(4,5));
// console.log(typeof(add));

// let sum = new function(a,b)
// {
//     return a + b;
// }
// console.log(add(3,4));
// console.log(typeof(add));


// Difference types of case styles in variable naming
// 1. camelCase
// let firstName = "surendra kumar pasi";
// console.log(firstName);

// 2. PascalCase
// let FirstName = "surendra kumar pasi";
// console.log(FirstName);

// 3. snake_case
// let first_name = "surendra kumar pasi";
// console.log(first_name);

// 4. kebab-case (not allowed in JavaScript variable names)
// let first-name = "surendra kumar pasi"; // Error: Unexpected token '-'
// console.log(first-name);

// Dynamically typed language

// let data = 42; // Initially a number
// console.log(data); // Output: 42
// console.log(typeof(data)); // Output: number

// data = "Hello, World!"; // Now a string
// console.log(data); // Output: Hello, World!
// console.log(typeof(data)); // Output: string

// data = true; // Now a boolean
// console.log(data); // Output: true
// console.log(typeof(data)); // Output: boolean

// data = 3.14;
// console.log(data); // Output: 3.14
// console.log(typeof(data)); // Output: number

// data = null;
// console.log(data);
// console.log(typeof(data)); // Output: object (this is a known quirk in JavaScript)

// data = { name: "surendra", age: 25 };
// console.log(data);
// console.log(typeof(data)); // Output: object

// data = [1, 2, 3, 4];
// console.log(data);
// console.log(typeof(data)); // Output: object (arrays are of type object in JavaScript)

// data = function() { return "Hello"; };
// console.log(data);
// console.log(typeof(data)); // Output: function

// // Type coercion in JavaScript
// let result;

// result = '5' + 10; // string concatenation
// console.log(result); // Output: '510'
// console.log(typeof(result)); // Output: string

// result = "5" - 2; // numeric subtraction. coercion to number
// console.log(result);
// console.log(typeof(result)); // Output: number

// result = "10" * 2; // numeric multiplication. coercion to number
// console.log(result);
// console.log(typeof(result)); // Output: number

// result = "20" / 4; // numeric division. coercion to number
// console.log(result);
// console.log(typeof(result)); // Output: number

// without declaration, variable is created in global scope
// x = 100; // Implicitly creates a global variable . it bydefault type is var
// console.log(x); // Output: 100
// console.log(typeof(x))

// name = "surendra pasi"; // Implicitly creates a global variable
// console.log(name); // Output: surendra pasi
// console.log(typeof(name))

//use valrial without declaration. reference error
// console.log(age);// Output: undefined

// what is the default value of an uninitialized variable. 
let score; // declared but not initialized
console.log(score); // Output: undefined
console.log(typeof(score)); // Output: undefined




