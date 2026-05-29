const http = require('node:http');
const server=http.createServer(function(req,res){
    if(req.url==='/'){
        res.end("hello")
    }
    else{
        res.end("page not found");
    }
});
let port=3001;
server.listen(port,function(){
    console.log(`listening to port ${port}`);
});