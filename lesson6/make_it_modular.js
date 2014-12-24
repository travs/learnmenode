var mod = require('./make_it_modular_module');

dir = process.argv[2];
ext = process.argv[3];

mod(dir, ext, function(err, data){
  for(d in data){
    console.log(data[d]);
  }
});
