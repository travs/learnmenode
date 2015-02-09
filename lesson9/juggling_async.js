
var http = require('http');
var url = require('url');

var completed = 0;          //how many 'end' responses have we?
var holder = Object();      //holds hostnames:strings
for(var x = 0; x < process.argv.length - 2; x++){
  address = process.argv[x+2];
  hostname = address.split(':')[2];
  holder[hostname] = '';       //initialize hostname key w/ empty string
  http.get(address, callback);     //start the request
}

function callback(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    hostname = url.parse(this.req._headers.host).hostname;
    //reverse-engineered hostname. Maybe there's a better way to get this?
    holder[hostname] += data;
  })
  response.on('end', function(){
    completed += 1;
    if(completed === 3){
      printem();
    }
  })
  response.on('error', function(err){
    console.log(err);
  })
}

function printem(){
  for(x in holder){
    console.log(holder[x]);
  }
}
