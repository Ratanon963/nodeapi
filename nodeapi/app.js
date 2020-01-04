const express = require("express"); //NPM
const app = express();     // NPM
const mongoose = require("mongoose") //NPM DB
const morgan = require("morgan");  // NPM
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");//NPM
var cookieParser = require('cookie-parser'); //NPM
const fs = require("fs");
const cors = require("cors");


const dotenv = require("dotenv"); //NPM  DB 


dotenv.config();

//db
mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser:true})
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log('DB connection error: ${err.message}');
});


// bring in routes
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");


app.get('/',(req,res) => {
    fs.readFile('docs/apiDocs.json',(err,data) =>{
        if(err){
            res.status(400).json({
                error: err
            });

        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
});


//middleware
app.use(morgan("dev")); 
app.use(bodyParser.json());
app.use(expressValidator()); 
app.use(cookieParser());
app.use(cors());
app.use("/",postRoutes);
app.use("/",authRoutes);
app.use("/",userRoutes);





app.use(function (err,req,res,next) {

    if (err.name === 'UnauthorizedError'){
        res.status(401).json({error: 'UnauthorizedError'});

    }

});




const port = process.env.port || 8080;
app.listen(port,() => {  
    console.log('A node JS API Listening on port:'+ '${port}');
});



