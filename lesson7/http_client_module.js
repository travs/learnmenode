var http = require('http');

module.exports = function(url){
  http.get(url, callback);
}

function callback(response){
  response.setEncoding('utf8'); 
  response.on('data', function(data){
    console.log(data);
  })
}
