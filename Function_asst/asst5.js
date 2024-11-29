// Create an anonymous function that takes an array of numbers and returns the sum of all the numbers

(function(numbers) {
    const sum = numbers.reduce((sum, num) => sum + num);
    console.log("Sum of the array:", sum);
})([1, 4, 5, 6, 7]); 
