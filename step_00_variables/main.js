//example of let
var firstName; //declaration 
firstName = "Sharoon"; //initialization
// Above, you can see the beauty of TypeScript with type annotations, which we'll explore further in this repo. Let's dive in after a quick scroll.
// example of Var:
var number1 = 100; //initialization
// example of const:
var Pi = 3.14;
// Type Annotations on Variables:
// Type annotations in TypeScript provide a powerful way to explicitly specify the data type of variables, which enhances code clarity, reliability, and maintainability compared to JavaScript.
//syntax
// let variableName : datatype = value;
//Type annotations can be used with any variable declaration keyword (let, var, const) in TypeScript.
// 1st example:
var lastName = "Masih";
//Now you can see that in the above code, we set the datatype of the lastName variable as string, this feature of typescript is known as type annotation.This is not available in javascript.
//it is also known as Explicit typing.
// now we will see how it is beneficial:
//now the typescript compiler will raise the error on compile, look at below :
lastName = 40; //it is saying that Type 'number' is not assignable to type 'string'.
//2nd example:
//In this example, we will see that we can also directly assign value to a variable without specifying the datatype or we can say that without doing type annotation:
var myProfession = "Software Engineer"; //here we are not doing type annotation and it is also known as "implicitly typing".
//in the above code typescript is inferring(guess) the datatype of myProfession by itself.
myProfession = true; //now the typescript compiler will raise an error because it has already inferred that the type of myProfession is "string".
// Here the basics of Type Annotation is completed.
// Now Understanding the Additional information about the keywords let, var, and const:
// let :
// 1-It is used for declaring variables in TS and JS.
// 2-It is Block-scoped, This means that variables declared with let are limited to the block (enclosed by curly braces {}) in which they are defined. look at the example below:
var test = true;
if (test) {
    var Check = "done"; //we are initializing the 'Check' variable using the 'let' keyword inside block.
}
else {
    Check = "not-done"; //error
}
console.log(Check);
// 3- when you use the let keyword to declare a variable, that variable can be reassigned to a different value. look at the example below:
var age = 30; //initialization
age = 40; //reassigning different value.
// const:
// 1-It is used for declaring variables in TS and JS.
// 2-It is also Block-scoped, This means that variables declared with let are limited to the block (enclosed by curly braces {}) in which they are defined.
// 3-When we want to declare a variable that cannot be reassigned to a different value after its initial assignment, we use the const keyword. Look at the example below:
var value = 3.14;
value = 4; //Trying to reassign 'Pi' to a new value will result in a TypeScript error
// var:
// 1-It is used for declaring variables in TS and JS.
// 2-Unlike let and const, variables declared with var are not block-scoped. This means they are visible throughout the global scope, which can lead to unintended side effects or bugs in complex code. look at the example below:
var test2 = true;
if (test2) {
    var Check2 = "done"; //we are initializing the 'Check' variable using the 'let' keyword inside block.
}
console.log(Check2); //no error because 'Check' is defined using 'var',In TS it will raise error but output will be done,because our code is transipiled into JS.
// 3-Variables declared with var are function-scoped. This means that if the variable is declared with var inside a function so then it is not accessible outside the function.look at the example below:
function Test() {
    var Check3 = "Hello World";
}
console.log(Check3); //error, not accessible.
// 4-Variables declared with var are hoisted to the top of their scope during compilation. This means that even if you reference a variable before its declaration, JavaScript/TypeScript will not throw an error (but the value will be undefined). look at the example below:
console.log(test3); //no error but at runtime it prints undefined.
var test3 = "Hello World";
console.log(test3); //it prints Hello World
// type coersion
var num = 40;
var Name = "shah";
var msg = Name + num; //type coersion
// mcqs related to type coersion
// 1- console.log(1 + "2" + 3); // Output: ?
// A) "123"
// B) "6"
// C) "15"
// D) 6
// 2-console.log(0 == false); // Output: ?
// A) true
// B) false
// C) 0
// D) 1
// 3-console.log("10" - 5); // Output: ?
// A) error
// B) 5
// C) NaN
// D) "510"
// 4-console.log( +"10" - 5); // Output: ?
// A) error
// B) 5
// C) NaN
// D) "510"
// 5-console.log( +"10" + 5); // Output: ?
// A) error
// B) 5
// C) NaN
// D) "510"
// Practice Questions:
//Q1-Declare a variable message of type string and assign it the value "Hello, TypeScript!". Log the value of message to the console.
//Q2-Declare two variables name and age with appropriate types (string for name and number for age). Assign values "Alice" to name and 30 to age. Concatenate name and age into a single string and log it to the console.
//Q3-Complete the TypeScript code snippet to swap the values of two variables a and b without using a temporary variable:
var a = 5;
var b = 10;
//solution, first try by yourself then see it.
a = a + b; //15 //first you take total inside "a"
b = a - b; //5 //subtract value of "b" from "a" 
a = a - b; //10  //now as we know that a=15 and b=5 which means "b" has the initial value of "a", therefore we subtract "b" from "a" 
console.log("a:", a); // Expected Output: 10
console.log("b:", b); // Expected Output: 5
//discuss case sensitivity in variable also. 
