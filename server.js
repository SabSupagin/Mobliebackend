const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const database = require('./database');


// Connect to Mongo DB
mongoose.Promise = global.Promise
mongoose.connect(database.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database Connected');
}),error=>{
    console.log('Cannot Connect to database ' + error);
}

// USE EXPRESS
const app = express();
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

// USE API
const testAPI = require('./routes/test.route');
app.use('/api',testAPI)


// CREATE PORT 
const port = process.env.PORT || 4000
const server = app.listen(port , ()=>{
    console.log("Connected to port " + port);
})

// ERROR 404 
app.use((req,res,next)=>{
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode.send(err.message))
})