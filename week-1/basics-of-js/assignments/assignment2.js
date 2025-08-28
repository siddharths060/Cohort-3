/* 
Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?
*/

function sum(a,b){
    return a+b;
}

console.log("Result of sum of 3 and 4 is: "+ sum(3,4));
console.log("Result of sum of 3 and 4 as strings is: "+ sum("3","4"));

// basically the strings "3" and "4" get concatinated