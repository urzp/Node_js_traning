
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]).toString();
var lines =  buf.split('\n').length - 1;
console.log(lines)
