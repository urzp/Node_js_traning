var http = require('http');
var url = process.argv[2];
var url2 = 'https://encrypted.google.com/'

http.get(url, function(res) {
  //console.log("statusCode: ", res.statusCode);
  //console.log("headers: ", res.headers);
  res.setEncoding('utf8')
  res.on('data', function(d) {
    console.log(d);
  });

})



/*
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
*/
