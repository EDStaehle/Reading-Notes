# CLASS 7 READING NOTES

class 7 notes.

computer do not assume. code needs to be very specific.

## READING NOTES

### Control Flow

the control flow is the order in which a computer executes the statements in a script.

the code is run in order from the first line of the file to the last unless the computer runs across a structure that alters the control

flow such as conditionals and loops i.e. if-else statments.

A typical script in JavaScript willinclude many many many control structures. including but not limited to conditionals, loops,

and functions. the control flow can also be changed when events occur such as a user clicks a submit button. which wold trigger a seperate

controlflow to occur.

# JavaScript Functions

a JS function iis a block of code designed to perform a particular task. it is executed when >something invokes it.

e.x. function myFunction(p1, p2) {

  return p1 * p2;   // The function returns the product of p1 and p2

}

## js function syntax

A JS function is defined with the `function` keyword, follwed by a **name**, followed by **()** function names rules are the same as

variables names rules.

the parentheses may include parameter names seperated by commas

the code that is to be executed by the functions is inside of **{}**

## Function Invocation

the code inside a function will execute if and when something invokes it or calls the function.

*when an event occurs i.e. user clicks a button

*when it is nivoked from JS code

*automatically

## Function Return

when JS reaches a `return` the function will stop executng.

if the function was invoked from a statement  JS will >return< to execute the code after the invoking statement

Functions opten compute a **return value** this value is returned to the caller

## Why Functions?

you can reuse code: define the code once, and use it many times.

you can use the same code many time with different arguments and produce different results.

# The **()** Operator Invokes the Function

Using the example above, toCelsius refers to the function object, and toCelsius() refers to the function result.

Accessing a function without () will return the function object instead of the function result.

## Functions used as varible values

functions can be used the samme way that vvariable are used. in all types of formulas assignments and calculations.

Example

Instead of using a variable to store the return value of a function:

let x = toCelsius(77);

let text = "The temperature is " + x + " Celsius";

You can use the function directly, as a variable value:

let text = "The temperature is " + toCelsius(77) + " Celsius";

## Local Variables

Variables within a JS functions become locla to that specififc function and can only be accessed from within the function.

Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.

# JavaScript operators

## JavaScript Arithmetic Operators

Arithmetic operators are used to perform arithmetic on numbers:

Operator Description

+ Addition

+ Subtraction

+ Multiplication

**       Exponentiation (ES2016)

/       Division

%       Modulus (Division Remainder)

++       Increment

--       Decrement

## JavaScript Assignment Operators

Assignment operators assign values to JavaScript variables.

Operator Example Same As

=       x = y  x = y

+=  x += y x = x + y

-=  x -= y x = x - y

*=  x*= y x = x * y

/=  x /= y x = x / y

%=  x %= y x = x % y

**=  x**= y x = x ** y

The addition assignment operator (+=) adds a value to a variable.

## JavaScript String Operators

The + operator can also be used to add (concatenate) strings.

The += assignment operator can also be used to add (concatenate) strings:

## Adding Strings and Numbers

Adding two numbers, will return the sum, but adding a number and a string will return a string:

## JavaScript Comparison Operators

Operator Description

==  equal to

===  equal value and equal type

!=  not equal

!==  not equal value or not equal type

> greater than

<  less than

>=  greater than or equal to

<=  less than or equal to

?  ternary operator

# JavaScript Logical Operators

Operator Description

&&  logical and

||  logical or

!  logical not

## JavaScript Type Operators

Operator Description

typeof Returns the type of a variable

instanceof Returns true if an object is an instance of an object type

## JavaScript Bitwise Operators

Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

Operator Description Example Same as Result Decimal

&  AND  5 & 1  0101 & 0001 0001   1

|  OR  5 | 1  0101 | 0001 0101   5

~  NOT  ~ 5   ~0101  1010   10

^  XOR  5 ^ 1  0101 ^ 0001 0100   4

<<  left shift 5 << 1 0101 << 1 1010   10

>> right shift 5 >> 1 0101 >> 1 0010    2

>>> unsigned right shift 5 >>> 1 0101 >>> 1 0010    2

# Demo notes
