var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const route = require('./routes/route')

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/members');

mongoose.connection.on('connected',()=>{
  console.log('Database connected');
});

mongoose.connection.on('error',(err)=>{
  if(err){
    console.log('database error occured. error:- '+err)
  }
});

app.use(express.static(path.join(__dirname,'publid')));

app.use('/api',route);

app.get('/',(req,res)=>{
  res.send('ok');
});

app.listen(port,()=>{
  console.log('server is listening at port : '+port);
});
