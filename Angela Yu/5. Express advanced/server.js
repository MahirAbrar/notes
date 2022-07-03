
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// Converts whenever url is encoded
app.use(bodyParser.urlencoded({extended: true}))

// Handle post request by req.body.<name>

app.get("/", function(request, response) {  
      // calculations can also be sent as response.send()
      // a = 3 + 5
      // response.send(a) 

      // Conditionals

      if (new Date().getDay === 6 || 0) {
            response.send("<h1>It's a weekend.</h1>")  
      } 
      else {
            // Send multiple pieces of data.
            response.write("<h1>It's a work day. :( </h1>")
            response.write("<p>Work MORE!</p>")
            response.send()
      }
});

app.listen(3000, function(){
      console.log("Server has started on port 3000")
});