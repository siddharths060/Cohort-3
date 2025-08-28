/* 
Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
*/

function checkNumber(num){
    if(num % 2 == 0){
        console.log(num + " the number is even");
    }
    else{
        console.log(num + " the number is odd");
    }
}

checkNumber(26);
checkNumber(5);