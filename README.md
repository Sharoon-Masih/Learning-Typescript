
# Typescript

# What is Typescript ?
TypeScript is a programming language developed by Microsoft. It is a superset of JavaScript, meaning it adds additional features and capabilities to JavaScript. TypeScript introduces static typing, which allows developers to specify the types of variables, function parameters, and return values within their code. This helps catch potential errors early in the development process and enhances code readability. TypeScript code is ultimately compiled into JavaScript, making it compatible with all JavaScript environments. It's a popular choice for building large-scale applications due to its enhanced tooling and type safety.It is built on the top of c#.


# Why should you use Typescript ?
## Static typing:
1-TypeScript is a superset of JavaScript that adds optional static typing and other features such as classes and modules.

2-TypeScript checks a program for errors before execution, and does so based on the kinds of values, it’s a static type checker.

3-Once TypeScript’s compiler is done with checking your code, it erases the types to produce the resulting “compiled” code. 

4-This means that once your code is compiled, the resulting plain JS code has no type information.

## Access to latest features(ES6, ES7, etc...):
Use cutting edge ECMA features such as `Optional Chaining (?.)` operator without having to worry about browser support.

Optional chaining (?.) is a feature introduced in TypeScript (and also available in JavaScript as of ECMAScript 2020).

Consider a scenario where you have an object user that may or may not have nested properties like address, street, and city. Traditionally, accessing nested properties would require multiple null or undefined checks to avoid potential errors: 

## Object Oriented Programming:
Absolutely! TypeScript's support for object-oriented programming (OOP) features can significantly enhance developers' ability to write maintainable and scalable code, especially for larger and more complex applications.

## IDE Support:
It is super well-supported by text editors including (VS Code,  Atom, Sublime, Eclipse, etc.)

## Large Community/Adoption:
TypeScript is made for creating large, complex systems that the modern Web abounds with.
# TypeScript Is Fastest-Growing Programming Language
"TypeScript's share has almost tripled over the course of 6 years, increasing from 12 percent in 2017 to 34 percent in 2022," said the company's State of Developer Ecosystem 2022.







## 🔗 Links 
https://visualstudiomagazine.com/articles/2023/02/02/jetbrains-survey.aspx


## Exponential Graph

![Exponential Graph](https://visualstudiomagazine.com/articles/2023/02/02/~/media/ECG/visualstudiomagazine/Images/2023/02/jetbrains_used.ashx)



# Next.js 13 Now Supports TypeScript By Default
### Next.js is the Most Demanded Full Stack Framework in 2023

![Exponential Graph](https://www.franciscomoretti.com/_next/image?url=%2Fassets%2Fnpm%2520trends%2520of%2520react%2520frameworks%25202023.png&w=1920&q=75)

# Getting Started
1. NodeJs Installation:
   - You can download the NodeJs LTS Version directly from [NodeJs's official website](https://nodejs.org/en/).
   - To verify the installation of Node.js, use the command node -v in your terminal.

2. VS Code Installation:
   - Download Visual Studio Code from its [official website](https://code.visualstudio.com/).

3. TypeScript Installation:
   - For Windows users, please use the command npm i -g typescript to install TypeScript globally.
   - For Mac/Linux users, the command is sudo npm i -g typescript.
   - You can verify the TypeScript installation by using the command tsc -v.

4. GitHub Account Creation:
   - Create your GitHub account by visiting [GitHub](https://github.com/).

### Note: Do all steps in seqeunce.

Question arises in my mind i.e:
when we use any method which is not built-in in TS so why does it not give error?

In TypeScript (TS), when you use a method that is not built-in or defined in the type definitions (like those provided by TypeScript's standard library or third-party libraries with TypeScript support), TypeScript will not necessarily give you an error immediately. There are a few reasons why this might happen:

Type Inference and Structural Typing:
TypeScript uses type inference to determine the types of variables and expressions based on their usage. If TypeScript can infer a compatible type for an expression, it will not raise an error even if the method used is not explicitly defined.

Structural Typing:
TypeScript uses structural typing, which means it focuses on the shape (structure) of types rather than the explicit type declarations. If an object or value matches the expected structure (properties and methods) used in your code, TypeScript will allow it, even if the method is not explicitly defined in the type.