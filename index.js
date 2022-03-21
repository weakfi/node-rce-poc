var express = require('express');
var cookieParser = require('cookie-parser');
var serialize = require('node-serialize');
var app = express();
app.use(cookieParser())
app.get('/', function(req, res) {
    if (req.cookies.profile) {
        var str = Buffer.from(req.cookies.profile, 'base64').toString();
        var obj = serialize.unserialize(str);
        if (obj.username) {
            res.send("Hello " + obj.username);
        } else {
            res.send("Hello anonymous");
        }
    } else {
        res.cookie('profile', "eyJ1c2VybmFtZSI6ImZyYW5rZWlsIiwiY29tcGFueSI6ImxleGluLmNvbSJ9", {
            maxAge: 900000,
            httpOnly: true
        });
        res.send("Hello stranger");
    }
});
app.listen(3000, '0.0.0.0');