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

    var NewBookSchema = new Schema({
            booksId :'',
            booksTitle:'',
            authorName:'',
            aboutAuthor:'',
            aboutBook:''
            });

var Bookdata = mongoose.model('books', NewBookSchema);        

module.exports = Bookdata;