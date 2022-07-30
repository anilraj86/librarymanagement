const express = require('express');
const cors = require('cors');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());

var Admindata=require('./src/model/admin');
var Userdata=require('./src/model/user');
var addBooks=require('./src/model/books');

app.post('/signupuser',(req,res)=>{
   
    console.log(req.body);

    var user = { 
        userName : req.body.user.username,
        userEmail : req.body.user.useremail,
        userPassword : req.body.user.userpassword,     
        }       
   var uservalue = new Userdata(user);
   uservalue.save((err,data)=>{
    if(err)
    {
      console.error(err);
    }
    else
    {
      res.status(200).send({"msg":"Inserted to DB"})
    }
   })
  
});

app.post('/adminsignup',(req,res)=>{
   
    // console.log(req.body);

        var admin = { 
        adminName : req.body.admin.adminName,
        adminEmail : req.body.admin.adminEmail,
        adminPassword : req.body.admin.adminPassword
            
        }       
   var adminvalue = new Admindata(admin);
   console.log(adminvalue);
   adminvalue.save((err,data)=>{
    console.log(data);
    if(err)
    {
      console.error(err);
    }
    else
    {
      res.status(200).send({"msg":"Inserted to DB"})
    }
   })
  
});

app.post('/addbooks',(req,res)=>{

    console.log(req.body);
    var books={
        booksId  :   req.body.books.booksId,
        booksTitle  :   req.body.books.booksTitle,
        authorName:req.body.books.authorName,
        aboutAuthor:req.body.books.aboutAuthor,
        aboutBook:req.body.books.aboutBook
    }

    var newBook = new addBooks(books);
   newBook.save((err,data)=>{
    console.log(data);
    if(err)
    {
      console.error(err);
    }
    else
    {
      res.status(200).send({"msg":"Inserted to DB"})
    }
   })

});

app.get('/booklist',function(req,res){
    
    addBooks.find()
                .then(function(books){
                    res.send(books);
                });
});

app.delete('/removeBooks/:id',(req,res)=>{
   
    id = req.params.id;
    console.log(id);
    addBooks.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

     

app.listen(3000, function(){
    console.log('listening to port 3000');
});

