var mymodule = require('./mymodule.js');
var fs = require('fs');

mymodule(function (err,data){
  data.forEach(function(vol){
    console.log(vol);
  })

});

//console.log(mymodule);
