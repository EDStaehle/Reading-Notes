# CLASS 8 READING NOTES

## Expressions and operators

## Assignment operators

An assignment operator assigns a value to its left operand based on the value of its righth operand.

A simple example of this is x = 7 where as the assingment operator is the equals sign the left operand x is the variable that is being

assigned a value and the right operand is the value that is being assinged to the left operand in this case 7.

there are shorthand assignment operators

 Name      Shorthand operator Meaning

Assignment     x = f()   x = f()

Addition assignment   x += f()   x = x + f()
  
Subtraction assignment   x -= f()   x = x - f()

Multiplication assignment  x *= f()   x = x* f()

Division assignment   x /= f()   x = x / f()

Remainder assignment   x %= f()   x = x % f()

Exponentiation assignment  x **= f()   x = x** f()

Left shift assignment   x <<= f()   x = x << f()

Right shift assignment   x >>= f()   x = x >> f()

Unsigned right shift assignment x >>>= f()   x = x >>> f()

Bitwise AND assignment   x &= f()   x = x & f()

Bitwise XOR assignment   x ^= f()   x = x ^ f()

Bitwise OR assignment   x |= f()   x = x | f()

Logical AND assignment   x &&= f()   x && (x = f())

Logical OR assignment   x ||= f()   x || (x = f())

Logical nullish assignment  x ??= f()   x ?? (x = f())

## Assinging to properties

if an expression evaluates to an object, the the left hand side of an assignment expression may make assignments

to properties of that expression.

If an expression does not evaluate to an object, then assignments to properties of that expression do not assign:

For more complex assignments, the destructuring assignment syntax is a

JavaScript expression that makes it possible to extract data from arrays

 or objects using a syntax that mirrors the construction of array and object literals.

const foo = ['one', 'two', 'three'];

// without destructuring

const one   = foo[0];

const two   = foo[1];

const three = foo[2];

// with destructuring

const [one, two, three] = foo;

## Evaluation and nesting

In general, assignments are used within a variable declaration. however, like other expressions, assignment expression like x = f()

evaluate into a result value.

this result can be used by another expression.

chaining assignments or nesting assignments in other expressions can result in wierd behavior. generally it is dicouaged to do

but ocasionally it is still neeeded.

by chaining or nesting an assignment expression its result can itself be assigned to another vsriable

## Comparison operators

a comparisonm operator compares its operans and returns alogic value based on if the result is true or false

when using comparrison operators typically JavaScript will make sure to change the value types to match if they are not the same the only

exception to this is === or !=

Comparison operators

Operator    Description Examples   returning true

Equal (==)   Returns true if the operands are equal. 3 == var1
"3" == var1

3 == '3'
Not equal (!=) Returns true if the operands are not equal. var1 != 4
var2 != "3"

Strict equal (===) Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS. 3 === var1

Strict not equal (!==) Returns true if the operands are of the same type but not equal, or are of different type. var1 !== "3"
3 !== '3'

Greater than (>) Returns true if the left operand is greater than the right operand. var2 > var1
"12" > 2

Greater than or equal (>=) Returns true if the left operand is greater than or equal to the right operand. var2 >= var1
var1 >= 3

Less than (<) Returns true if the left operand is less than the right operand. var1 < var2
"2" < 12

Less than or equal (<=) Returns true if the left operand is less than or equal to the right operand. var1 <= var2
var2 <= 5

Note: => is not a comparison operator but rather is the notation for Arrow functions.

## for statments

a for loop repeats until a sprecified condition evaluates to false it looks like

for ([initialExpression]; [conditionExpression]; [incrementExpression])

  statement

when a for loop executes the following occurs.

* the initializing expression `initialExpression` if any is executed.

* the `conditionExpression` expression is evaluated. if the `conditionExpression` is true the loop executres if its false the loop terminates.

the statement executes
a for loop is generally used when we know how many times to use it

## while statement

 while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

while (condition)

  statement

If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.

The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.

To execute multiple statements, use a block statement ({ }) to group those statements.
a while loop is used when we dont know how long it could take.
