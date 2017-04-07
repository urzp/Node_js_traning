var fs = require('fs')
var lines = undefined

function addOne(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    if (err){
      return console.log(err);
    }
    lines = (fileContents.toString()).split('\n').length - 1;
    callback()
  })
}

function loglines() {
  console.log(lines)
}

addOne(loglines)
