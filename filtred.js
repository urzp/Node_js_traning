var fs = require('fs');
var folder = process.argv[2];
var type = process.argv[3];

fs.readdir(folder, function(err, list){
  if (err){
    return err;
  }
  var file;
  for (var i=0; i<list.length; i++){
     file = list[i].split('.');
     if (type == file[1] ){
       console.log(list[i]);
     }

  }
});
