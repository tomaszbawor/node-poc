var express = require('express');
var app = express();

app.get('/', function (req, resp) {
resp.send("Hello world")
});

app.listen(4000, function () {
    console.log("App listening on port 4000")
});