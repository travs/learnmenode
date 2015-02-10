var net = require('net');
var util = require('util');

var argPort = process.argv[2];

var server = net.createServer(function(socket){
  socket.write(formatDate(new Date()));
  socket.end();
})
server.listen(argPort);

function formatDate(d){
  var year = d.getFullYear();
  var month = ('0' + (d.getMonth() + 1)).slice(-2);
  var day = ('0' + d.getDate()).slice(-2);
  var hours = ('0' + d.getHours()).slice(-2);
  var minutes = ('0' + d.getMinutes()).slice(-2);
  return (util.format('%s-%s-%s %s:%s', year, month, day, hours, minutes) + '\n')
}
