var fs      = require("fs"),
    express = require('express'),
    cors    = require('cors'),  //https://npmjs.org/package/cors
    app     = express();

var corsOptions = {
  origin: '*'
};

app.get("/ServerDate.js", cors(corsOptions), function(req, res,next){
    fs.readFile('../lib/ServerDate.js', 'utf8', function (err, data) {
        var now = Date.now();
        if (err)
            res.status(500);
        else {
            res.set("Content-Type", "text/javascript");
            res.send(data + "(" + now + " , " + "'/time'" + ");\n");
        }
    });
});

app.get("/time", cors(corsOptions),function(req,res,next){
    var now = Date.now();
    res.set("Content-Type","application/json");
    res.json(now);
});

app.get("/", function(req, res){
    res.sendfile("example.html");
});

app.listen(3000);
console.log('Listening on port 3000');
