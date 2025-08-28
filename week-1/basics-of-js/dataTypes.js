/* 
the data types in java script are divided into two major categories:
    Primitive data types: 
    Number : used to store numbers
    BigInt : used to store large numbers
    string : used to store sequence of characters
    boolean : used to store boolean values
    undefined : a variable declared but not assigned gets undefined
    null : no value
    symbol : Unique and immutable identifiers. Often used as object keys.


    Non primitive/Reference Data types :
    object : Collection of key-value pairs.
    arrays : Ordered list of values (can mix types).
    Function : (also an object in JS!)
    Date : (built-in object)
*/


    //objects example
    // simple object
    let person = {
        firstName : "John",
        age : 25,
        canVote : true
    }

    console.log("Name : " + person.firstName + " age : " + person.age + " canVote :" + person.canVote);
    
    let persons = {
        
       person1 :{
        firstName : "michael",
        age : 25,
        canVote : true
    },person2 :{
        firstName : "amy",
        age : 28,
        canVote : true
    },
    person3: {
        firstName : "kabib",
        age : 15,
        canVote : false
    }
}

console.log("Name : " + persons.person1.firstName + " age : " + persons.person1.age + " canVote :" + persons.person1.canVote);
console.log("Name : " + persons.person2.firstName + " age : " + persons.person2.age + " canVote :" + persons.person2.canVote);
console.log("Name : " + persons.person3.firstName + " age : " + persons.person3.age + " canVote :" + persons.person3.canVote);

// arrays : 

let personArray = [["lamar", 23, true],["franklin", 30, true], ["Trevor", 17, false]]
for(let i = 0; i < personArray.length; i++){
    for(let j =0; j < personArray.length; j++){
        console.log( personArray[i][j])
    }
}

// functions 

function greet(name){
    return "Hello " + name + "!"
}

console.log(greet("Trevor"))

let today = new Date();
console.log(today);