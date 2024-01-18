const {readFile, writeFile, existsSync, rmdir, unlink, mkdir, unlinkSync} =  require ('fs');
readFile('./blog.txt', (err, blog) => {
    if (err) {
        console.log(err)
    }
    else{
        console.log(blog.toString())
    };

});
writeFile('./blog.txt', 'Taiwo Blog is the best place to stay updated', (err) =>{
    if (err) {
        console.log('There is an error')
    }
    else{
        console.log('File Updated')
    }
});

if (existsSync('./blog')){
    console.log('there is a file like that');

    rmdir('./blog', () => {
        console.log("it has beem deleted")
    })
}
else{
    mkdir('./blog', () =>{
        console.log('New Folder')
    })
}

unlink('./blog.text', () => {
    console.log("file deleted")
    
})
writeFile('./take.js', 'Taiwo Blog is the best place to stay updated', (err) =>{
    if (err) {
        console.log('There is an error')
    }
    else{
        console.log('File Updated')
    }
});
