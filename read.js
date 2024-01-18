const  {readFile, writeFile, mkdirSync, existsSync, rmdir, unlink} = require("fs");

// reading a file
readFile('./data.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log("hello");

// writing a file
writeFile('./data.txt', "This is a data file", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("file has been written");
});

// creating a directory creating a folder 

// checking if the directory exist
if (existsSync('./assets')) {
    console.log("folder already exist");

    //deleting directory deleting a folder 
    rmdir('./assets', () => {
        console.log("folder deleted");
    });
}
else {
    //making/creating the directory
    mkdirSync ('./assets', () => {
        console.log("folder created");
    });
}

//deleting a file
unlink('./data1.txt', () => {
    console.log("file has been deleted");
});

