// Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments.

function sum(...numbers) {   //using rest parameters
    return numbers.reduce((total, num) => total + num, 0);
}


console.log(sum(1, 2, 3, 4));  
console.log(sum(5, 10, 15));  
