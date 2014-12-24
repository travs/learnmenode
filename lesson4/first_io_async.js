var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, 'utf8', callback)

function callback(error, data){
  var n = data.split('\n').length;
  console.log(n - 1);
}
