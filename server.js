const express = require("express");
const request = require("request");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
app.use(cors());

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

const requestOps = {
  url: "http://localhost:1313/api/modules?_module=iris&query=OWASP",
  method: "GET",
};

app.get("/api", function (req, res) {
  request(requestOps, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.listen(port);
console.log("listening on port https://localhost/" + port);
