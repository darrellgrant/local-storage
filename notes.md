unary operator - an operator used to operate on a single operand to return a new
value. Example: i++ or ++i (increment by one) Example: ! (inverts boolean value)

Short circuit: pertains to a conditional statement where one side of the
condition is evaluated and there is no need to evaluate the other side.

<pre> tag: shows HTML tags in the browser

<code> tag: shows formatted programming code in the browser (used for examples,
tutorials, etc.)

<progress> tag: creates a progress bar as part of your application

Number() parses a number written as a string (example: "40876" into a number, if
anything else, such as "40876HelloNurse" you get NaN.

parseInt() parses a number written as a string (example: "40876" into a number,
if anything else, such as "40876HelloNurse" the HelloNurse part is not evaluated. 
parseInt() takes a second parameter, the radix (example: base 2, base 10).

Spread Operator: This spreads out the elements of an array into variables which
can be used as individual arguments in a function call.

Rest Operator: This gathers up individual elements into an array which can be
used as an argument in a function definition.

Arrow functions are anonymous functions. If one argument, no parenthesis needed.
If two or zero arguments, then parenthesis are needed. If the function body
consists of one line of code, such as a return statement, then no curly brackets
are needed. If the function can be written in one line, then the "return" keyword
is assumed and is omitted. 

JSON: JavaScript Object Notation. Key value pairs. The key is always written between double quotes.

NULL
Null: represents the intentional absence of any object value. It's a primitive value. It is falsy. JavaScript never sets a value to null, it must be done specifically in your program.
Undefined: A variable has been declared but has not yet been given a value. Undefined is primitive.
IIFE: A function that runs as soon as it is defined (there is no function call). 

instanceof
The instanceof operator tests to see if the prototype property of a constructor appeas anywhere in the prototype chain of an object.
instanceof ______ returns true or false.
Example x instanceof String, or obj instanceof Object
Used to check to see if something is an instance of an Object (a function, Object, String Number)
Not used to check primitives or literals!  

typeof 
typeof returns a string indicating th type of the unevaluated operand. Example typeof x (returns "string"), typeof obj (returns "object")

=== identity operator
== equality operator

Type Coersion**********************
The automatic or implicit conversion of values from one data type to another (such as strings to numbers).



Type Conversion (also typecasting)
The explicit conversion of values from one data type to another
Number()
String()
parseInt()
parseFloat()



Falsy
A falsy value is a value that is considered false when encountered in a Boolean context.
falsy values: undefined, 0, -0, empty string ("", '', ``), null, NaN

Truthy
All values are truthy except for the falsy values listed above.

check if a value is null--check for absense of value 
if (value == null){
    console.log("do something")
}
*use double equals - checks for null and undefined, which are considered equal 
and both are considered an absense of value!
*use triple equals if just checking for null.
**but if the value is "" or 0, then the console.log does not run

Random Number: 
Math.Random() - a random number between 0 and 1 not including 1
console.log(Math.floor(Math.random() * 10) + 1) *random number between 1 and 10*

Math.floor() takes a positive decimal number and rounds it down to nearest integer (example: 6.7 becomes 6) or a negative decimal number and rounds it up to nearest negative integer (ex: -3.7 becomes -4) (-4 is less than -3.7) (<------ Math.floor direction)

Math.ceiling() 

Math.round()

page redirection
window.location = "https://somewebpage.com"

void operator: 
Specifies an expression to be evaluated without returning a value
Syntax:
javascript:void(func())


isNaN()
function determines whether a value is NaN or not. Alternative: Number.isNaN()
Syntax isNaN(someVariable)
Example
function func(x){
    if (isNaN(x){
        return "Not a Number"
    }
    return x * 1000
}

arguments object
Is an array like object accesible inside functions that contains the values of the arguments passed to that function. 
Not used with arrow functions.
Array like, meaning not all array functions are available. Can use a traditional for loop.


arguments.length
arguments[0] //first argument


Object.create()
Object.keys()
Object.values()
Object.assign()
