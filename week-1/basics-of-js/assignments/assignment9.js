/* 
Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
*/

const usersArray = [{
    name : "Trevor",
    age : 26,
    gender : "Male"
},{
    name : "Michael",
    age : 16,
    gender : "Male"
},{
    name : "Amanda",
    age : 32,
    gender : "Female"
}
]

function printUsers(users){
    for(let i=0; i < users.length; i++){
        if(users[i].age > 18){
            console.log(user[i]);
        }
    }
}

printUsers(usersArray)