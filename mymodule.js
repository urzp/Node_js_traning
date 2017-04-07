var fs = require('fs');


/*
module.exports = function(){
  console.log('test');
}
*/

module.exports = function(folder,type,callback){

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
