var total = 0;
for(var n=2; n < process.argv.length; n++){
  total += Number(process.argv[n]);

}
console.log(total);
