# Class 6 reading notes

An object is like a company where it consits of workers for the functionality and file systems where it contains the different data.

A bennefit of using an object literal is that you can transfer a series of related data.

objects differ from arrays because objects can store a collection of data rather than just a single value type.

If an objects property name is defined at runtime than you cant use dot notation you have to use braket notation.

this is how the function inside the object is call. this. can be called on mulitple times storing different data each time.

The DOM is a programming interface to change the document structure style and content. It is used to manipulate the website.

The relationship between DOM and JavaScript is that without DOM JavaScript wopuld not have any model or notion of web pages, or HTML documents. DOM is used as a web API to build websites for JavaScript.

## things I want to know more about

DOM manipulation entirely.

## lecture notes

## objects

### what are they?

- data type//data structure
- convenient & powerful wat to group data and functions
- coma seperated key/value pairs
- Functions that are store in objects are reffered to as methods

`let person = {`
 `name: 'Elias',`
 `age: 24,`
 `isRemote: true,`
 `title: 'Student',`
 `says: function(){`
 `console.log('hey class!');`
`},`
 `10:'this key is a number',`
`'key with a space': 'totatlly valid'`
`}`

<!-- //dot notation -->
`console.log(person.age);`
`console.log(person.title);`
<!-- //braccket notation -->
`console.log(person[10]);`
`console.log(person['key with a space']);`
<!-- // call our methods -->
`person.says();`

<!-- // adding values to object from the outside
// creates new property and assign it a value -->

`person.intrests = ['art','cars',];`
`person.intrests.push('weightlifting');`
`console.log(person);`

`let personTwo = {`
 `name: 'Ricky',`
 `age: 80,`
 `isRemote: true,`
 `title: 'GOD',`
 `says: function(){`
 `console.log(`praise be him ${this.name}`);`
`},`
 `course:'all',`
`}`
<!-- when using the word this it will refer to the object you are in -->
`personTwo.says();`

## DOM manipulation

- 'The DOM' = document object model
- HTML and CSS come together in the browser - JS reads this as an object

### step for DOM Manipulation is JS

```javascript
// JS needs a window into your HTML or into the DOM 
// step 1
let section = document.getElementById('my-section');
// step 2 create elements // h2Element = <h2></h2>
const h2Element =  document.createElement('h2');

//  step 3 - give context if necessary
h2Elemen.textContent = 'hey! I\'m an h2!'
// <h2>Hey I'm and h2!</h2>

// step 4 - add it to the DOM
// parentElement.appendchild(child)
section.appendChild(h2Element);
