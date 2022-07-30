const mongoose = require('mongoose');

const dbpath="mongodb+srv://anilfsd:V6rEOYFIpxWjf3Pj@cluster0.hlyik.mongodb.net/LibraryMS";

const connectionParams={
    useNewUrlParser:true,
    useUnifiedToplogy:true,
};

mongoose
.connect(dbpath,connectionParams)
.then(()=>{
    console.info("connection to the DB Success");
})
.catch((e)=>{
    console.log("Error",e);
});
// mongoose.connect('mongodb://localhost:27017/LibraryMS');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    userName : String,
    userEmail : String,
    userPassword : String
   });

var Userdata = mongoose.model('user', NewUserSchema);        

module.exports = Userdata;