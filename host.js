const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request made");
    console.log(req.url, req.method);
    const fs = require('fs')

    // res.setHeader('Content-type','plain/html');
    res.write("<h1>i am elon musk</h1>"); 
    res.write("<p>i am Joe Biden</p>");
    res.write("<p>i am Joe Biden</p>");
    // res.end();

    // read a file on the browser //

    fs.readFile('./tee.html',(err, blog)=> {
        if (err){
            console.log(err);
            res.end();
        }
        else{
            // res.write(blog);
            res.end(blog);

        }
    })
});

server.listen(3000, 'localhost',() => {
    console.log('listening for request on port 3000');
})
