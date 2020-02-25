import express from 'express';
const app = express();

app.get('/', function (req, resp) {
resp.send("Hello world dumb shit!")
});

app.listen(4000, function () {
    console.log("App listening on port 4000")
});