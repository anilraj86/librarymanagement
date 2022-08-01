const express = require('express');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());

var Admindata=require('./src/model/admin');
var Userdata=require('./src/model/user');
var addBooks=require('./src/model/books');

app.get('/booklist/:id',  (req, res) => {
  
    const id = req.params.id;
    console.log(id);
      addBooks.findOne({"_id":id})
      .then((books)=>{
          res.send(books);
      });
  })

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

app.put('/updatebook',function(req,res){

    console.log(req.body)
    id=req.body._id,
    console.log(req.body.booksId);
    booksId=req.body.booksId,
    booksTitle  =   req.body.booksTitle,
    authorName=req.body.authorName,
    aboutAuthor=req.body.aboutAuthor,
    aboutBook=req.body.aboutBook
    addBooks.findByIdAndUpdate({"_id":id},
                                {$set:{"booksId":booksId,
                                "booksTitle":booksTitle,
                                "authorName":authorName,
                                "aboutAuthor":aboutAuthor
                                }})
                .then(function(){
                    res.send();
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

 
  app.post('/login', (req, res) => {

    let userData = req.body;
    logincheck= Admindata.findOne({
            $and: [{"adminEmail":userData.adminname},
            {"adminPassword":userData.password}]})
    .then((adminlogin)=>{
      console.log(adminlogin);
        res.send(adminlogin);
    })
            
    });

    app.post('/userlogin', (req, res) => {

      let userData = req.body;
      console.log(userData);
      logincheck= Userdata.findOne({
              $and: [{"userEmail":userData.username},
              {"userPassword":userData.password}]})
      .then((userlogin)=>{
        console.log(userlogin);
          res.send(userlogin);
      })
              
      })

  

app.listen(3000, function(){
    console.log('listening to port 3000');
});

