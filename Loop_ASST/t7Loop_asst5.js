// Write a program that uses a for in loop to loop through an object and prints the key-value pairs.

let Array = [ 1 , 2 , 3 , 4 , 5]

for (let i in Array) {
    console.log(`key - ${i} value ${Array[i]}`);
}