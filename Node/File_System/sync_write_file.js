const fs=require('fs');
fs.writeFileSync('message_sync.txt', "hello world");
console.log("file created");