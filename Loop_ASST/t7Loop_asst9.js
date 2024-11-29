// Write a program that reverses a string using a loop.
function reverseString(input) {
    let reversed = ''; 
  
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i]; 
    }
  
    return reversed;
  }
  
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  
  console.log(`Original String: ${originalString}`);
  console.log(`Reversed String: ${reversedString}`);
  