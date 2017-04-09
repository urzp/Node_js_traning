var http = require('http');
var url = require('url');
moment = require('moment');

var port = Number(process.argv[2]);

var server = http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url, true);
  res.writeHead(200,{'content-type':'application/json'});
  if (pathname == '/api/parsetime'){
    return res.end (JSON.stringify({
      hour: moment(query.iso).hour(),
      minute: moment(query.iso).minute(),
      second: moment(query.iso).second()
    }))
  }

  if (pathname === '/api/unixtime'){
    return res.end(JSON.stringify({
      unixtime: Number(moment(query.iso).format('x'))
    }))
  }

})

server.listen(port);
