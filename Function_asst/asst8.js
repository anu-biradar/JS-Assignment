// Write a function reverseArray(arr) that returns a new array with the elements of arr in reverse order.

function reverseArray(arr) {
    let reversed = [];  
    for (let i = arr.length - 1; i >= 0; i--) {  
        reversed.push(arr[i]);  
    }
    return reversed;  
}

console.log(reverseArray([1, 2, 3, 4])); 
console.log(reverseArray([10, 20, 30]));  
