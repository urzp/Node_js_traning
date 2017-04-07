var mymodule = require('./mymodule.js');
var fs = require('fs');

var folder = process.argv[2];
var type = process.argv[3];

mymodule(folder ,type, function (err,data){
  data.forEach(function(vol){
    console.log(vol);
  })
});

//console.log(mymodule);
