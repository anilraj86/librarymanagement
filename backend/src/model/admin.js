const mongoose =require('mongoose');

const dbpath="mongodb+srv://anilfsd:V6rEOYFIpxWjf3Pj@cluster0.hlyik.mongodb.net/LibraryMS";

const connectionParams={
    UseNewUrlParser:true,
    UseUnifiedToplogy:true,
};

mongoose
.connect(dbpath,connectionParams)
.then(()=>{
console.info("Connection Success")
})
.catch((e)=>{
    console.info("Error",e);
});

const Schema=mongoose.Schema;

var NewadminSchema=new Schema({
    adminName   : String,
    adminEmail : String,
    adminPassword : String
});

var admindata=mongoose.model('admin',NewadminSchema);

module.exports=admindata;