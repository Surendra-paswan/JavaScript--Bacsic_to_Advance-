/***************************************
 Simple Arithmetic Operators Assignment
***************************************/

/* Q1. Addition, Subtraction, Multiplication, Division */
let a = 20;
let b = 10;
console.log("Q1 - Addition:", a + b);
console.log("Q1 - Subtraction:", a - b);
console.log("Q1 - Multiplication:", a * b);
console.log("Q1 - Division:", a / b);

/* Q2. Remainder */
console.log("Q2 - Remainder when 45 is divided by 7:", 45 % 7);

/* Q3. Square of a number */
let number = 6;
console.log("Q3 - Square of", number, "is:", number ** 2);

/* Q4. Increment */
let x = 5;
x++;
console.log("Q4 - After incrementing, x =", x);

/* Q5. Decrement */
let y = 10;
y--;
console.log("Q5 - After decrementing, y =", y);

/* Q6. Pre-increment and Post-increment */
let num = 7;
console.log("Q6 - Original num:", num);
console.log("Q6 - Post-increment:", num++);
console.log("Q6 - After post-increment:", num);
console.log("Q6 - Pre-increment:", ++num);
console.log("Q6 - After pre-increment:", num);

/* Q7. Pre-decrement and Post-decrement */
let val = 8;
console.log("Q7 - Original val:", val);
console.log("Q7 - Post-decrement:", val--);
console.log("Q7 - After post-decrement:", val);
console.log("Q7 - Pre-decrement:", --val);
console.log("Q7 - After pre-decrement:", val);

/* Q8. Predict output */
let p = 10;
let q = 3;
console.log("Q8 - Output:", p % q); // 1

/* Q9. Predict output */
let m = 4;
console.log("Q9 - Output:", m ** 2); // 16

/* Q10. Predict output */
let k = 5;
console.log("Q10 - Output:", k++); // 5
console.log("Q10 - Output:", k);   // 6

/* Q11. Total and Average Marks */
let marks1 = 70;
let marks2 = 65;
let marks3 = 80;
let marks4 = 75;
let marks5 = 60;

let totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
let averageMarks = totalMarks / 5;

console.log("Q11 - Total Marks:", totalMarks);
console.log("Q11 - Average Marks:", averageMarks);

/* Q12. Simple Interest */
let P = 5000;
let T = 2;
let R = 5;

let SI = (P * T * R) / 100;
console.log("Q12 - Simple Interest:", SI);


/***************************************
 Advanced Arithmetic Operators – Solutions
***************************************/

/* Q1. Swap two numbers without third variable */
let a1 = 10;
let b1 = 20;
console.log("Advanced Q1 - Before Swap: a =", a1, "b =", b1);

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log("Advanced Q1 - After Swap: a =", a1, "b =", b1);


/* Q2. Area of a circle */
let r = 7;
let areaCircle = Math.PI * r * r;
console.log("Advanced Q2 - Area of Circle:", areaCircle.toFixed(2));


/* Q3. Perimeter of a rectangle */
let length = 10;
let width = 5;
let perimeterRectangle = 2 * (length + width);
console.log("Advanced Q3 - Perimeter of Rectangle:", perimeterRectangle);


/* Q4. Celsius to Fahrenheit */
let C = 25;
let F = (C * 9 / 5) + 32;
console.log("Advanced Q4 - Fahrenheit:", F);


/* Q5. Compound Interest */
let P2 = 5000;
let R2 = 5;
let T2 = 2;

let A = P2 * (1 + R2 / 100) ** T2;
let CI = A - P2;

console.log("Advanced Q5 - Amount (A):", A.toFixed(2));
console.log("Advanced Q5 - Compound Interest (CI):", CI.toFixed(2));


/* Q6. Total cost after discount */
let price = 1200;
let discount = 15; // in %
let discountAmount = (price * discount) / 100;
let finalPrice = price - discountAmount;

console.log("Advanced Q6 - Discount Amount:", discountAmount);
console.log("Advanced Q6 - Final Price:", finalPrice);


/* Q7. Perimeter of a square */
let side = 8;
let perimeterSquare = 4 * side;
console.log("Advanced Q7 - Perimeter of Square:", perimeterSquare);


/* Q8. Area of a triangle */
let base = 12;
let height = 8;
let areaTriangle = (base * height) / 2;
console.log("Advanced Q8 - Area of Triangle:", areaTriangle);


/* Q9. Percentage of total marks */
let totalMarks2 = 500;
let obtainedMarks = 380;
let percentage = (obtainedMarks / totalMarks2) * 100;
console.log("Advanced Q9 - Percentage:", percentage + "%");


/* Q10. Distance traveled */
let speed = 60; // km/h
let time = 3;   // hours
let distance = speed * time;
console.log("Advanced Q10 - Distance Traveled:", distance + " km");

/*
On a shopping website, calculate the total cost of a product when given the price per item (price = 150) and the quantity (quantity = 3).
Also, calculate a 10% discount on the total cost and display the discounted price.
// Inputs
let price = 150;      // price per item
let quantity = 3;     // number of items

// Calculations
let totalCost = price * quantity;
let discount = totalCost * 0.10;              // 10% discount
let discountedPrice = totalCost - discount;

// Output
console.log("Price per item:", price);
console.log("Quantity:", quantity);
console.log("Total Cost (before discount):", totalCost);
console.log("Discount (10%):", discount);
console.log("Discounted Price:", discountedPrice);
*/