const express = require ('express');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

const blogPost = [
    {
      title: 'Getting Started with EJS',
      author: 'John Doe',
      content: 'This is a blog post about using EJS in web development.'
    },
    {
      title: 'Node.js Best Practices',
      author: 'Jane Smith',
      content: 'Learn about best practices when working with Node.js.'
    },
    {
      title: 'Frontend Frameworks Comparison',
      author: 'Alex Johnson',
      content: 'Comparing popular frontend frameworks for modern web development.'
    }
  ];
  
      

const name = "denis";

app.get('/',(req,res)=>{
    res.render('index', {title: "Home Page"});
});
app.get('/about',(req,res)=>{
    res.render('about', {title: "About Page"});
});
app.get('/blog',(req,res)=>{
    res.render('blog', { blogPost, name, title: "Blog Page" });
});
app.get('/blog/create',(req,res)=>{
    res.render('new', {title: "Create New"});
});
app.use((req,res)=>{
    res.status(404).render('404', {title: "404 Page"});
});


// app.get('/blog',(req,res)=>{
//     res.sendFile('./views/blog.html',{root: __dirname});
// });
// app.get('/blog/create',(req,res)=>{
//     res.sendFile('./views/new.html',{root: __dirname});
// });
// app.use((req,res)=>{
//     res.status(404).sendFile('./views/404.html',{root: __dirname});
// });

// app.get('/',(req,res)=>{
//     res.sendFile('./views/home.html',{root__dirname});
// });

// app.get('/about',(req,res)=>{
//     res.send('About pagee');
// });

// console.log(__dirname);
// console.log(__filename);

