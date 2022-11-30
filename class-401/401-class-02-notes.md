# Class 2 notes

## An introduction to NodeJS and Express

1. Explain middleware, answer as though I were a non-technical recruiter.

- Middleware is custon functionality that are ran on request or response objects.

2. Express the most popular __ __ ____.

- Node Web Framework

3. Express is “unopinionated.” What does that mean?

- This means that there is no "right way" to do something. while this makes express extremely versatile and flexible it also makes it very difficult to use.

4. What is a module and why is modularity useful to us as developers?

- a module is a JS file that can be imported into the server using `require` this is useful for not only debugging but also tests as it allows you to test individual parts of your code.

## what is NPM

1. What version of npm are you running on your machine?

- version 8.18.0

2. What command would you type to install a library/package called ‘jshint’ into your node project?

- `npm i jshint`

## What is TDD?

1. Explain why tests are important. Please explain as though I were your non technical elder.

- tests are important as they allow developers the ability to ensure that code works as expected before it gets pushed up to production and that it meets all the requirements needed. It is also a proccess that can be automated and this can save a lot of time in debugging.

2. What are three expected benefits of testing

- reduced defect rates

- reduced effort needed in final phases of development due to the reduced defect rates

- helps provide higher quality of designss and efficiency in code.

3. Name at lest 2 individual pitfalls and at least 2 team pitfalls commonly encountered while writing tests.

- not testing correctly and writing tests unrelated or uneeded for the project.

## CI/CD

1. What are three benefits of Continuous Integration?

- you can catch more bugs reduced merege conflicts and branch history

2. What is the difference between Continuos Delivery and Continuous Deployment?

- Continuous Delivery is Developing to release at any time, Continuous Deployment is an extension of CD to deploy new features.

3. Explain how GitHub fits into this process assuming the listener comes from a non-technical background.

- GitHub allows multiple users to collaborate on work together in one spot it also allows test to be performed before code is merge and ensures there are no merge conflicts with code and if there is where the conflicts are at. essentially it organizes and streamlines the production process with teams and even indiviuals.