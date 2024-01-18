const http = require ("http");
const fs = require ('fs')

const server = http.createServer((req,res) => {
    console.log("reguests made");
    console.log(req.url, req.method);

    var path = "./views/";

    switch(req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200;
        break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
        break;
        default:
            // path += '/404.html';
            res.statusCode = 404;
        break;    
    }
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end();
        }
        else{
            res.end(data)
        }
    })


});
server.listen(3002, "localhost",() => {
    console.log("listening on port 3002")
});