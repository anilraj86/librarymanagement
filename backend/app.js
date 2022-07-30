const express = require('express');
const Admindata = require('./src/model/admin');
const cors = require('cors');
var bodyparser=require('body-parser');
const Userdata = require('./src/model/user');
var app = new express();
app.use(cors());
app.use(bodyparser.json());


app.post('/insert',(req,res)=>{
   
    console.log(req.body);
   

    var adminSign = {
      
      adminName : req.body.adminSign.adminName,
      adminEmail : req.body.adminSign.adminEmail,
      adminPassword : req.body.adminSign.adminPassword,

    }

    var adminValue=new Admindata(adminSign);
   
    adminValue.save((err,data)=>{
      if(err)
      {
        console.error(err);
      }
      else
      {
       
        res.status(200).send({"msg":"Inserted to DB"})
      }
     });

    
    var user = { 
        userName : req.body.user.username,
        userEmail : req.body.user.useremail,
        userPassword : req.body.user.userpassword,     
        }       
   var uservalue = new Userdata(user);
   console.log(user);
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
// app.get('/products',function(req,res){
    
//     ProductData.find()
//                 .then(function(products){
//                     res.send(products);
//                 });
// });
// app.get('/:id',  (req, res) => {
  
//   const id = req.params.id;
//     ProductData.findOne({"_id":id})
//     .then((product)=>{
//         res.send(product);
//     });
// })

app.post('/login', (req, res) => {
    let userData = req.body
         
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

//     app.put('/update',(req,res)=>{
//       console.log(req.body)
//       id=req.body._id,
//       productId= req.body.productId,
//       productName = req.body.productName,
//       productCode = req.body.productCode,
//       releaseDate = req.body.releaseDate,
//       description = req.body.description,
//       price = req.body.price,
//       starRating = req.body.starRating,
//       imageUrl = req.body.imageUrl
//      ProductData.findByIdAndUpdate({"_id":id},
//                                   {$set:{"productId":productId,
//                                   "productName":productName,
//                                   "productCode":productCode,
//                                   "releaseDate":releaseDate,
//                                   "description":description,
//                                   "price":price,
//                                   "starRating":starRating,
//                                   "imageUrl":imageUrl}})
//      .then(function(){
//          res.send();
//      })
//    })
   
// app.delete('/remove/:id',(req,res)=>{
   
//      id = req.params.id;
//      ProductData.findByIdAndDelete({"_id":id})
//      .then(()=>{
//          console.log('success')
//          res.send();
//      })
//    })
     

app.listen(3000, function(){
    console.log('listening to port 3000');
});

