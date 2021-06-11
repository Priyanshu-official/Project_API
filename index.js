const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/project_Item')
var app = express()

const cors = require("cors");

app.use(cors())

//Route
app.get('/',function(req,res){
  res.send("Hello Priyanshu!")
})
//oka but where you wrote that code 
app.use('/project_Item',router)

//MongoDB connection
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})

//Server
app.listen(8000,function(){
  console.log('Server is Up')
})


