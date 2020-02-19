var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  //parse the url into a URL object
  var q = url.parse(req.url, true);
  //Grab the path from the URL
  var filename = "." + q.pathname;
  //Read the file in the path (from the directory local to this server). The only file in this project is "Test.html"
  fs.readFile(filename, function(err, data) {
    //If file is not there, return 404
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    
    //If file is there, write the file's data content to the response
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);