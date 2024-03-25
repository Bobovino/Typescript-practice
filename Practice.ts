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
    return `Hello, ${Person.name}! Your age is ${Person.age}.`
}

/* Exercise 3: Union Types
Problem: Define a type named Input that can be either a string or a number. 
Then, write a function printInput that takes an Input type as its parameter and logs it to the console. */

type Input=string|number

function printInput(input:Input):void{
    console.log(input)
}

/* Exercise 4: Enums and Literal Types
Problem: Create an enum named Color with three members: Red, Green, and Blue. Next, write a function getColorName that takes a Color as
 its parameter and returns the name of the color as a string.
 */

 enum Color{
    Red="Red",
    Green="Green",
    Blue="Blue"
 }

 function getColorName(color:Color):string{
    return color
 }

 function getColorName2(color: Color): string {
    return Color[color];
}


/*  Exercise 5: Optional Properties and Nullish Coalescing
Problem: Modify the Person interface to make the isStudent property optional. 
Then, write a function checkStudentStatus that takes a Person object as its argument and returns a string that says whether the person is a student. 
If isStudent is not provided, assume the person is not a student. */

interface Person2{
    name:string,
    age:number,
    isStudent?:boolean
}

function checkStudentStatus(person: Person2): string {
    return person.isStudent ?? false ? "A student indeed" : "Not a student";
}

