var express=require('express');
var bodyParser=require('body-parser');

var {KBS}=require('../models/kb-model');
var {mongoose}=require('./mongoose-connect');


var app=express();
// Middleware to insert the bodyparser so that we can get request body passed on API call to the request
app.use(bodyParser.json());


app.post('/kb-add',(req,res)=>{
    var kb=new KBS({
        title:req.body.title,
        url:req.body.url,
        viewCount:req.body.views,
        ratingCount:req.body.ratings
    });
    kb.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
});

app.listen(3000,()=>{
    console.log('Server started on port 3000');
});

module.exports={
    app
}