var http = require('http');

var completed = 0;
var queue = [];
for(var x = 0; x < process.argv.length - 2; x++){
  getit(process.argv[x+2], x);
}

function getit(url){
  var pos = queue.length;
  queue[pos] = pos;
  http.get(url, callback);
}

function callback(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    queue[pos] += data;
  })
  response.on('end', function(){
    completed += 1;
    if(completed == 3){
      printem();
    }
  })
  response.on('error', function(err){
    console.log(err);
  })
}

function printem(){
  for(var x in queue){
    console.log(queue[x]);
  }
}
