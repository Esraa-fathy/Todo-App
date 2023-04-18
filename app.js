const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const app=express();
const PORT = 4000;


// connection to mongodb
mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('[INFO] Connect to DB success!');
});


// MiddleWares
 app.use(express.urlencoded({ extended : true }));
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());


 // routes 
 app.use(require("./routes/todo"));


// Server Configurations 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
