var fs = require('fs');
var folder = process.argv[2];
var type = process.argv[3];

fs.readdir(folder, function (err, data){
  if (err){
    return err;
  }
  for (var i = 0; i < data.length; i++){
    file = data[i];
    if (file.split('.')[1] == type ){
      console.log(data[i])
    }
  }
})
