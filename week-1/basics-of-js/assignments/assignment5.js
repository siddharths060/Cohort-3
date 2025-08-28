/* 
Write a function called sum that finds the sum from 1 to a number
*/

function calculateSum(num){
    let sum = 0;
    for(let i=1; i <= num; i++){
        sum+=i;
    }

    return sum;
}

console.log("sum of first 10 natural nos is : "+ calculateSum(10));

console.log("sum of first 50 natural nos is : "+ calculateSum(50));