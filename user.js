const express = require('express')
const { get } = require('https')
var app = express()
var fs=require('fs')
const { json } = require('body-parser')
const { join } = require('path')

app.get("/",function(req,res){
    res.send("start my server")
})
app.get("/listUsers",function(req,res){
    res.send("list user")

})
app.get("/user/:id",function(req,res){
    if (req.params.id>0 && req.params.id<4){
    var data=fs.readFileSync(__dirname+"/users.json")
    data= JSON.parse(String(data))
    console.log(data)
    var user =data ["user"+req.params.id]
    console.log(user)
    res.send(user)}
    else{
        res.send("error")
    }
})
app.delete("/deleteuser/:id",function(req,res){
    var data=fs.readFileSync(__dirname+"/users.json")
    data= JSON.parse(String(data))
   
    //var user =data ["user"+req.params.id]
    delete data ["user"+req.params.id]
    res.send(data)
})
app.get('/form', function(req,res){
    res.sendFile(__dirname+"/form.html")
}
)
var bodyParser= require('body-parser')
var urlEncoded= bodyParser.urlencoded({extended:false})



app.post('/addUser', urlEncoded,function(req,res) 
{
    var newUser={name:"", password:"", profession:""}
    newUser.name=req.body.name
    newUser.password=req.body.password
    newUser.profession=req.body.profession
    var data= fs.readFileSync(__dirname+"/users.json") 
    data= JSON.parse(String(data))
    data['user4']= newUser
    res.send(data)
})
var server =app.listen(1000,function()

{
    var host =server.address().address
    var port =server.address().port
})