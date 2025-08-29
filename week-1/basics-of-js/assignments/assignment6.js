/* 
Write a function that takes a user as an input and greets them with their name and age

*/

const user1 = {
    name : "john",
    age : 25,
    gender : "Male"
}

const user2 = {
    name : "Lamar",
    age : 32,
    gender : "Male"
}


function greet(user){
    console.log("Hello! "+ user.name + " of age: "+ user.age)
}
//greeting user1
greet(user1);

// greeting user2

greet(user2);