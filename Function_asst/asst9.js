// Explain and demonstrate the behavior of hoisting with function declarations vs. function expressions. 
// What happens when you call a function before it’s declared?

// ANSWER =>

// 1. Function Declarations and Hoisting ==>
// Function declarations are fully hoisted. This means the entire function definition (both the function's name and its body)
// is moved to the top of the scope.

console.log(greet()); 

function greet() {
    return "Hello, world!";
}


// 2. Function Expressions and Hoisting
// Function expressions are not fully hoisted. Only the variable declaration (i.e., the variable itself) is hoisted, 
// but the function definition (the function's body) is not hoisted.

// console.log(greet()); // Output: TypeError: greet is not a function

// var greet = function() {
//     return "Hello, world!";
// };                               // Will THROW ERROR NOT HOISTED



//   Function declarations are hoisted with their body, allowing them to be called before they appear in the code.

/*   Function expressions are hoisted only as variable declarations, and the function is assigned to the variable later,
     so trying to use them before the assignment results in errors. */