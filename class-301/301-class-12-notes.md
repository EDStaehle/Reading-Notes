# class 12 notes

## status codes

100’s = informational codes

200’s = success codes

300’s = redirection codes that tell the client that what they are requesting isnt available at the location anymore.

400’s = client error codes. These are invalid requests a client sent to a server. these can be cause from different issues such as incorrect URI's missing authentication etc

500’s = these are server error codes. usually  this inddicates an issue with the server.

What is a status code 202? Accepted code. AOften used for asynchronus processing. This will mean that the clients request was valid but the processing will finish sometime in the future

What is a status code 308?  Permanenet Redirect. This tells the user to user another URL to access the resource and not use the current one anymore.

What code would you use if an update didn’t return data to a client? 204 code

What code would you use if a resource used to exist but no longer does? 202

What is the ‘Forbidden’ status code? 403

## video

Why do we need to pull our MongoDB database string out of our server and put it into our .env?

| The data base string includes login and password to acess the data base.

What is middleware?

| Middleware is code that runs before a response or before a request to check the data and pottentially modify it if needed.

What does app.use(express.json()) do?

| it parses incoming data into json format

What does the /:id mean in a route?

|  this is a parameter for id and is used after the endpoint for the url to grab the parameter

What is the difference between PUT and PATCH?

| put is a full update patch is a minor update or partial update

How do you make a default value in a schema?

| with the default property assigned to the schema options.

What does a 500 error status code mean?

| internal server error this is a generic response indicating something is wrong with the code either on front end side or back end side

What is the difference between a status 200 and a status 201?

| 200 means understood 201 means understood and created a resource