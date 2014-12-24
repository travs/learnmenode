var path = require('path');
var fs = require('fs');

module.exports = function(dir, ext, callback){
  var filt = [];     //declare empty array
  ext = '.' + ext;  //add '.' to extension

  fs.readdir(dir, function(err, list){
    for(f in list){
      if(path.extname(list[f]) === ext){
        filt.push(list[f]);
      }
    }
    callback(err, filt);
  })
}
