var http = require('http');
var map  = require('through2-map');

var port = Number(process.argv[2]);

var server = http.createServer( function (req, res){
  if (req.method !== "POST") return res.end('This server only accepts POSTS');

  req.pipe(map(chunk => {
    return chunk.toString().toUpperCase();
  })).pipe(res);

});


server.listen(port);
