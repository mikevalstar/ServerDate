var fs      = require("fs"),
    express = require('express'),
    cors    = require('cors'),  //https://npmjs.org/package/cors
    app     = express();

app.get("/ServerDate.js", cors(), function(req, res){
    fs.readFile('../lib/ServerDate.js', 'utf8', function (err, data) {
        var now = Date.now();
        if (err)
            res.status(500);
        else {
            res.set("Content-Type", "text/javascript");
            res.send(data + "(" + now + ");\n");
        }
    });
});

app.get("/time",function(req,res){
    var now = Date.now();
    res.set("Content-Type","application/json");
    res.json(now);
});

app.get("/", function(req, res){
    res.sendfile("example.html");
});

app.listen(3000);
console.log('Listening on port 3000');
