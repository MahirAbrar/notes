// install nodemon when developing which acts as a live server.

// import express, Not working with ES6 expression
const express = require("express")
// application extends express
const app = express()

// specify what should happen when a browser gets in touch with our server and makes a get request.
// first argument is the location, 2nd argument is function which takes in request and response
// request information about the computer which requested to the server
// response the server makes when the request is made

app.get("/", function(request, response) {    // best practice is naming request and response req, res.
      response.send("hello")  // Send method to send something to the screen. (possible to send HTML)
});

// It is possible to make request to different routes.
app.get("/contact", function(req, res) {    
      res.send("contact me.") 
});

app.get("/about", function(req, res) {    
      res.send("My name is Mahir. I own this website. I am learning so much stuff and i need to be rich!") 
});

// Always use __dirname + location from the folder. Otherwise it wouldn't work in the server.
// __dirname finds the location of the file whereever it is.
app.get("/calculate", function(req, res) {
      res.sendFile(__dirname + "/calculate.html")
})

// Handles post request but something is wrong
// app.post("/calculate", function(req, res) {
//       res.send("ty")
// })

// any request that is made to port 3000 will be received by the application.
app.listen(3000, function(){
      console.log("Server has started on port 3000")
}
)