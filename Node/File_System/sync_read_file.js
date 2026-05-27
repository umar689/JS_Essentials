const fs =require('fs');

let data = fs.readFileSync('message_sync.txt', 'utf8');
console.log(data);