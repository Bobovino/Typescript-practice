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

/*Generics
Problem 6: Create a generic function named wrapInArray that takes a value 
of any type and returns an array of that type. The function should work 
with strings, numbers, or any other type.

Approach: Use TypeScript generics to make the function versatile. 
Generics allow you to write a component or function that can work over a variety of types 
rather than a single one.
    */

function wrapInArray<T>(value:T):T[]{
    let valueArray:T[]=[value]
    return valueArray
}

/*Exercise 7: Mapped Types
Problem: Create a mapped type Optional that takes an interface and makes all of its properties optional.

Approach: Mapped types allow you to take an existing model and transform each of its properties into a new type.
 Use this to iterate over the keys of an object type and modify their properties. */


type Optional<T>={
    [K in keyof T]?:T[K]
}

/*Exercise 8: Conditional Types
Problem: Write a TypeScript type called StringOrArray which should be a string 
if a boolean flag isString is true, or an array of strings if isString is false.

Approach: Conditional types in TypeScript allow your type to behave differently based on some condition. 
They are a way to introduce some form of type logic. */

type StringOrArray<T extends boolean>= T extends true ? string : string[]

/*Exercise 9: Type Guards
Problem: Create a function named isString that takes an input of type string | number 
and returns true if the input is a string, or false otherwise.

Approach: Type guards allow you to narrow down the type of an object within a conditional block. 
TypeScript is smart enough to know which type the variable can be at any given time. */

type stringOrNumber=string|number

function isString(input:stringOrNumber):boolean{
    return typeof input ==="string"
}

/*Exercise 10: Utility Types - Readonly
Problem: Given an interface Person (from Exercise 1), create a type ImmutablePerson 
where all the Person properties are read-only.

Approach: TypeScript provides several utility types to transform types in a flexible way. 
One of these is Readonly, which makes all properties of a type read-only. */

type ImmutablePerson =Readonly<Person>