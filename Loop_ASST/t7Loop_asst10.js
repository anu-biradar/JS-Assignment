// Write a program that calculates the sum of all the numbers in an array.
function calculateSum(array) {
    let sum = 0; 
  
    for (const num of array) {
      sum += num; 
    }
  
    return sum; 
  }
  
  const numbers = [10, 20, 30, 40, 50];
  const totalSum = calculateSum(numbers);
  
  console.log(`The sum of the numbers in the array is: ${totalSum}`);
  