/* variables are used to store data
   you declare variables using these keywords:
   let : variable can be reassigned 
   const : constant variables can be reassigned 
   var : old way of assigning variables, function scoped
*/


    let a = "hello world"
     console.log(a);
    a = 25;
    console.log(a);

    const b = 3.14159;
    console.log(b);
    b = 25;
    /* THROWS AN  ERROR  
        b = 25;
         ^
        error: This assignment will throw because "b" is a constant
            at D:\Web-development\Cohort-3\week-1\basics-of-js\variable.js:16:5

        14 |     const b = 3.14159;
                    ^
        note: The symbol "b" was declared a constant here: */
    console.log(b);

    var c = true;
    console.log(c)
    c = false
    console.log(c)

  