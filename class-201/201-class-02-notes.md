# Class 2 Reading Notes

## This topic is very important for our studies as it is teaching the foundations of web development to us. This is the base from where we will grow

## Intro to HTML

### 1 Why is it important to use semantic elements in our HTML?

Semantics in html are important to use not only because they clearly describe their purpose to both the user and the browser but also because they help to structre the content of a webpage.

### 2 How many levels of headings are there in HTML?

There are 6 levels of heading where `h1` is the largest and typically most important heading and `h6` will be the smallest heading.

### 3 What are some uses for the `<sup>` and `<sub>` elements?

The uses of `<sub>` and `<sup>` are to change the projection of text under the needed circumstances. this could be used in math for something like an exponent would use `<sup>` or in chemistry for something like a coefficient would use a `<sub>`

### 4 When using the `<abbr>` element, what attribute must be added to provide the full expansion of the term

when using the `<abbr>` element you must have the tite attribute to provide the full expansion of the abreviation or term.

## Learn CSS

### 1 What are ways we can apply CSS to our HTML?

There are 3 ways to add CSS to html and those are EXTERNAL this will be when you want to use a different css sheet to style you html document. INTERNAL this is when you want to style your html ducment inside of your document without an external CSS sheet. INLINE this is when you want to style a specific element.

### 2 Why should we avoid using inline styles?

We should avoid this practice of styling because not only is it highly innefficient but also becaue it makes reading the code a lot harder and prevents multiple styles from being added to a element.

### 3 Review the block of code below and answer the following questions

`h2``{`
     `color: black;`
     `padding: 5px;`
  `}`

What is representing the selector? The h2 tage is rerpresenting the selector.

Which components are the CSS declarations? the `color: black;` and `padding: 5px;` these are declarations as they are properties with assigned values .

Which components are considered properties? The `padding` and `color` as these are easily readable features to modify and will change the presentation of the element.

## Learn JS

### 1 What data type is a sequence of text enclosed in single quote marks?

This is known as a `string` datatype.

### 2 List 4 types of JavaScript operators

Addition `+`, Subtraction `-` , assignment `=` and strictly equal `===`.

### Describe a real world Problem you could solve with a Function

When having a user input a password where if they are wrong it will invoke a function containing a for loop giving the user a set number of chances to get the right password before locking them out to ensure the safety of users data.

## Making decisions in your code

### 1 An if statement checks a _condition_ and if it evaluates to _true__, then the code block will execute.

### 2 What is the use of an `else if`?

the purpose of an `else if` is to check for different possible conditions before executing the else statement code. for example checking to see if there are different users or checking to see if a different comparrison orperator evaluates to true.

### 3 List 3 different types of comparison operators

1: `!=` 2: `>=` 3: `===`.

### 4 What is the difference between the logical operator && and ||?

`&&` checks to see if both of the conditions evaluate to true and example of this would be `let x = 9` `let y = 8` if we used the comparrison operator and said that `x > y && y === x` this would return false because even though x is greater than y the other side of the comparrison operator is false because y is not strictly equal to x. however if we did `x > y &&  y = 4 + 4` this would return true as both sides of the logical operator return true. `||` is or so it checks to see if one side or the other is true. an example of this being flase would be `x < y || y === x` this returns false because neither side of the logicaal operator is true. Different situations could lead to a return of true though such as `x >= y || y = 6 + 3` this would return true because even though the right side of the logical operator is false as y is not equal to 6 + 3 the left side of the logical operator is true where x is greater than or equal to y. With `&&` you need both sides of the operator true with `||` you need at least one side to be true. 

## Things I want to Know More About

I would like to know more about functions for sure and especially how they are applied to real world situations. 