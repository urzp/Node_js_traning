var http = require('http');
var async = require('async');
var urls = process.argv.slice(2);
var results =[];


async.eachSeries(urls,  function (url,callback) {

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
      results.push(result);
      callback();
    })
  })

},function done() {
  results.forEach( function (vol) {
    console.log(vol);
  })
})
