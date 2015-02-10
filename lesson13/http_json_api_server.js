var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  if(req.method !== 'GET'){
    res.end('not a GET request.');
  }
  var urlInfo = url.parse(req.url, true);
  d = new Date(urlInfo.query.iso);
  if(urlInfo.pathname === '/api/parsetime'){
    jsonTime = {
      'hour': d.getHours(), 
      'minute': d.getMinutes(),
      'second': d.getSeconds()
    };
  }
  else if(urlInfo.pathname === '/api/unixtime'){
    jsonTime = { 'unixtime': d.getTime() };
  }
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.write(JSON.stringify(jsonTime));
  res.end();
})
server.listen(process.argv[2]);
