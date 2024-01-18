const http = require ('http');
const fs = require ('fs')

const server = http.createServer((req, res)=>{
    console.log('request made')
    console.log(req.url, req.method);

    let path = './class/';
    switch(req.url){
        case '/':
            path += '/index.html';
        break;
        case '/about':
            path+= '/about.html';
        break;    
        case '/blog':
            path+= '/blog.html';
        break;   
        case '/contact':
            path+= '/contact.html';
        break;
        default:
            path += '/404.html' 
        break;       
    }

    fs.readFile(path,(err, data) =>{
        if(err){
            console.log(err)
            res.end();
        }
        else{
            res.end(data)
        }
    })
});

server.listen(3003, 'localhost',() => {
    console.log('listening on port 3003')
});