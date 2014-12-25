var http = require('http');

module.exports = function(url){
  http.get(url, callback);
}

function callback(response){
  var fullString = '';
  response.setEncoding('utf8');
  response.on('data', function(data){
    fullString += data;
  })
  response.on('end', function(){
    console.log(fullString.length);
    console.log(fullString);
  })
  response.on('error', function(err){
    console.log(err);
  })
}
