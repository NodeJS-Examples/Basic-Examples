var http = require('http');
var dt = require('./datetimemodule')
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month + " " + dt.DateTime();
  res.end(txt);
}).listen(8080);