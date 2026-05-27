//callback and sync api
const fs = require('fs');

fs.writeFile('message.txt', "hello world",function(err){
    if(err) console.log(err);
    else console.log("file created");
});
