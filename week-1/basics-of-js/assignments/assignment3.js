/* 
Write a function called canVote that returns true or false if the age of a user is > 18
*/

function canVote(age)
{
    if(age > 18){
        return true;
    }
    return false;
}


console.log("John is of age 25, can he vote? \n "+ canVote(25));
console.log("Amy is of age 15, can she vote? \n " + canVote(15));
