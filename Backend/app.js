//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app=express();

const route=require('./routes/route');

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/test');


//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to db');
});


//on error
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log("Error occured: "+err);
    }
});


const port=3000;//port number


//adding middleware
app.use(cors());
app.use(bodyparser.json());

//routes
app.use('/',route);


//testing server
app.get('/',(req,res)=>{
    res.send('foobar')
});

app.listen(port,()=>{
    console.log('Server started at port: '+port);
});