const fs = require('fs');
fs.mkdir('myfolder', function(err){
    if(err) console.log(err);
    else console.log("folder created"); 
});