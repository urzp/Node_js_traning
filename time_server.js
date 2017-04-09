var net = require('net');
var moment = require('moment');
var port = process.argv[2];
var server = net.createServer( function (socket){
  console.log(data);
  var data = moment().format("YYYY-MM-DD hh:mm");

  socket.write(data);
  socket.end('\n');
})


server.listen(port);
