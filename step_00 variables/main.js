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
//lastName=40;  //it is saying that Type 'number' is not assignable to type 'string'.
//2nd example:
//In this example, we will see that we can also directly assign value to a variable without specifying the datatype or we can say that without doing type annotation:
var myProfession = "Software Engineer"; //here we are not doing type annotation and it is also known as "implicitly typing".
//in the above code typescript is inferring(guess) the datatype of myProfession by itself.
//myProfession = true //now the typescript compiler will raise an error because it has already inferred that the type of myProfession is "string".
// Here the basics of Type Annotation is completed.
var test = true;
if (test) {
    var Check = "done"; //we are initializing the 'Check' variable using the 'let' keyword inside block.
}
else {
    //Check="not-done"; //error
}
//console.log(Check); 
console.log(lala);
var lala = "shah";
