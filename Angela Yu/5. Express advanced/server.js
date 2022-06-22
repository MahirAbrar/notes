
const express = require("express")
const app = express()
const bodyParser = require("body-parser")


app.get("/", function(request, response) {   
      response.send("hello")  
});

app.listen(3000, function(){
      console.log("Server has started on port 3000")
});