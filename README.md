# NODE + WEB SERVER

## Node

- Theory - v8 engine, general explanation.
- How node works
- Use cases and companies using node.
- Node install
- node module system:

1.  Path
2.  OS
3.  FS
4.  HTTP

## Web Server

- Theory - What is a server
- HTTP/S protocol
- http.createServer
- req/res:

1. query params
2. body

- writeHead
- status codes
- write
- listen

## Resources:

[Nodejs](https://www.youtube.com/watch?v=TlB_eWDSMt4)

[Web Server](https://www.youtube.com/watch?v=JhpUch6lWMw&t=399s)

[HTTP](https://www.youtube.com/watch?v=iYM2zFP3Zn0) - until minute 16:20

## Task:

End product - a system consisting of a client side and a server side that aims to check whether the client is allowed to enter the Cyber4s course.

### front

The customer side will contain a form which contains the following details:

1. Name
2. Age
3. Ability (Must have at least one ability)

- please use axios to send the data to your server side when submitting the form

### back

On the server side you will find a DB file which will simulate working with a database. The file contains an object with restrictions on who can enter the course.
Create an http server that will receive the POST request from the customer and reply to it according to the data if he is allowed to enter the course or not.

- Please clone this repo to get th db.js file

# Submitting the work:

Please submit your project repo in the classroom
