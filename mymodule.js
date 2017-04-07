var fs = require('fs');
var folder = process.argv[2];
var type = process.argv[3];

/*
module.exports = function(){
  console.log('test');
}
*/

module.exports = function(callback){

  fs.readdir(folder, function (err, data){
    var filtred_data = [];
    if (err){
      return callback(err);
    }
    for (var i = 0; i < data.length; i++){
      file = data[i];
      if (file.split('.')[1] == type ){
        filtred_data.push(data[i]);
      }
    }
    return callback(null, filtred_data);
  })

}
