var http = require("http");
var fs = require('fs');
var url = require("url");
var formidable = require('formidable');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    if (q.pathname == "/upload") {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = "./Files/" + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err){
                if (err) throw err;
            });
            if (err) throw err;
            res.write('File uploaded');
            res.end();
        });
    }
    else {
        var path = "." + q.pathname;
        fs.readFile(path, function(err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }

}).listen(8080);
