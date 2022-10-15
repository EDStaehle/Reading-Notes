# class 7 reading notes

## Domain Modeling

We need domain modeling for specific problem or to describe various entities, attributes, behavior anmd constraitns that govern the problem.

## HTML Table Basics

Usaing tables for layout reduces accessibility for visually impaired readers, produce tag soup whicch messes up search engines and making code harder to debug, and tables are not automatically responsive.

There is `<th>``<tr>` and `<td>` `<th>` is table headers. `<tr>` is table row and `<td>` is table data.

## introducing Constructors

a constructor is a way to create multiple objects without rewriting code over and over again.

with an object you bind `this` to the object and you refer to it in your conbsturct you dont bind a this in th econstruct.

## prototype

constructor is like a dictionary where it is the template of everything a prototype is like a specific words within the construct.

## lecture notes

### constructors

- a special type of function
- instantiate object for us
- act like a bluerint/favtory for objects
- starts with keyword `function`

## why we use them

- keeps our code dry
- helps us prevent bugs
- give us more uniformed/uinfied objects

### prototypes

- Inherits === prototype

#### demo

'use strict';

let rey = {
  name: 'Rey',
  title: 'Instructor',
  course: '201d90'
}
let audrey = {
  name: 'Audrey',
  title: 'instructor',
  course: 'Instructor'
}
let PeopleOf201d90 = [];
// constructor function
 // parameters - unique to each object
// this refers to the whole object being created
function People(firstName, title){
  this.name =  firstName;
  this.title = title;
  this.course = '201d90';
  this.intrests = [];
  PeopleOf201d90.push(this);
  
}
// create objects using constructor
//  constructor is a function
let dennis = new People('Dennis','Student');
let john = new People('john','student');
let zoe = new People('zoe','student');
console.log(PeopleOf201d90);
//  prototype - special object that comes with constructors. 
// this is where we are going to store our methods
People.prototype.greeting = function(){
  console.log(`hey class hey my name is ${this.name}!`);
}
PeopleOf201d90[1].greeting();