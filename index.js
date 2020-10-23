const http = require('http');
const fs = require('fs');
const url = require('url');


console.log("hid:")
http.createServer(function (req, res) {
    var request = url.parse(req.url, true);
    var action = request.pathname;
    console.log(request, action);
    if (action == '/vid.webm') {
        var img = fs.readFileSync('./vid.webm');
        res.writeHead(200, { 'Content-Type': 'video/webm' });
        res.end(img, 'binary');
    }
    else if (action == '/music.txt') {
        var img = fs.readFileSync('./music.txt');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(img, 'binary');
    }
    else {
        var thing = fs.readFileSync('./index.html')
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(thing, 'html');
    }
}).listen(8080);