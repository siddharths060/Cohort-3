/* browser understand HTML,CSS,Js and Web assembly
   technically the brower can run C/C++ code using web assembly
   Properties of JS:
   1.Interpreted
   Js is an interperted language(technically: JIT just in time compiled language), ie: it is executed line by line at runtime
   by the javascript engine in the brower or server environment 

   2.Dynamically typed language
   ie, the variables of js are not bound to a specific data type, ie, types are determined at run time and can change
   as the program executes
   
   3.Single threaded nature
   Js is single threaded in nature, ie, it can process only one task at a time

   4.Garbage collection
   JS automatically 
*/

var a = 10;
console.log(a);
a = "sid"
console.log(a);
// this change in datatype will typically lead to an error in compiled languges like c++ or java
