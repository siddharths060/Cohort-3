/* 
Write a function that takes a new object as input which has name , age  and gender and 
greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

*/

const user1 = {
    name : "Trevor",
    age :34,
    gender : "Male"
}

const user2 = {
    name : "Amanda",
    age : 38,
    gender : "Female"
}

const user3 = {
    name : "Jimmy",
    age : 26,
    gender : "Male"
}

function greetUser(user){
    if(user.gender == "Male"){
        console.log("Hello! Mr."+ user.name+ " of age:"+ user.age);
    }
    else if(user.gender == "Female"){
       console.log("Hello! Ms."+ user.name+ " of age:"+ user.age);
    }else{
        console.log("Hello!"+ user.name+ " of age:"+ user.age);
    }
}

//greet user 1
greetUser(user1);

//greet user 2
greetUser(user2);

//greet user 3
greetUser(user3);