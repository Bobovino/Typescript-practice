/* Exercise 1: Basic Types
Problem: Create an interface named Person that represents a person's basic information. This interface should include the following properties:

name: A string representing the person's full name.
age: A number for the person's age.
isStudent: A boolean that indicates whether the person is a student. */


interface Person{
    name:string,
    age:number,
    isStudent:boolean
}

/* Exercise 2: Function Typing
Problem: Write a function greet that takes a Person object (from Exercise 1) as an argument and returns a greeting string. 
The function should return a string like "Hello, [name]! Your age is [age].". */

function greet(Person:Person):string{
    return "Hello, [name]! Your age is [age]."
}

/* Exercise 3: Union Types
Problem: Define a type named Input that can be either a string or a number. 
Then, write a function printInput that takes an Input type as its parameter and logs it to the console. */

type Input{
    
}

function printInput(input:Input):void{
    console.log()
}