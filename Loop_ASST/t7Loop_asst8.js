// Write a program that finds the largest number in an array using a for of loop.

const numbers = [12, 45, 7, 34, 89, 23];

let largest = 0

for (const num of numbers) {
  if (num > largest) {
    largest = num; 
  }
}

console.log(`The largest number in the array is: ${largest}`);

               // Below pgm will print Largest second number

// const numbers = [12, 45, 7, 34, 89, 23];

// let largest = -Infinity;      // Initialize to a very small value
// let secondLargest = -Infinity; // Initialize to a very small value

// for (const num of numbers) {
//   if (num > largest) {
//     secondLargest = largest;  // Update second largest before changing largest
//     largest = num;            // Update largest
//   } else if (num > secondLargest && num !== largest) {
//     secondLargest = num;      // Update second largest if it's not equal to largest
//   }
// }

// console.log(`The largest number is: ${largest}`);
// console.log(`The second largest number is: ${secondLargest}`);
