var fs = require('fs');

var fileString = fs.readFileSync(process.argv[2]).toString();

var stringAry = fileString.split('\n');

console.log(stringAry.length - 1);
