// Write a function multiplyNumbers(a, b = 1) that multiplies two numbers. If the second argument is not provided, use 1 as the default value.

function multiplyNumbers(a, b = 1){
    let multiply = a * b
    console.log(multiply);
    
}

multiplyNumbers(5)
multiplyNumbers(5,6)