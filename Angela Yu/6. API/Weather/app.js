// HTTPS method of get request.
// Other way possible, search on google. "Get request to an external server node"
const express = require("express")
const app = express();

const https = require("https")

app.get("/", function(req, res) {

      
      res.send("Server is up and running")
})

app.listen(3000, function() {
      console.log("server started on port 3000")
}
)