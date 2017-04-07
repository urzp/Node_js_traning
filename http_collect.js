var http = require('http');
var url = process.argv[2];

http.get(url,responce => {
  let result = "";
  responce.setEncoding('utf8');
  responce.on('error',(err) => {
    console.error();
  });

  responce.on('data', (data) => {
    result += data;
  });

  responce.on('end', () => {
    console.log(result.length);
    console.log(result);
  })
})
