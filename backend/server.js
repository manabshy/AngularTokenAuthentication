var express = require('express')
var cors = require('cors')
var app = express()
var mongoose = require('mongoose')
var jwt = require('jwt-simple')
var bodyParser = require('body-parser')
var User = require('./models/User.js')
var posts = [
    {message: 'Message 1 from the server'},
    {message: 'Message 2 from the server'}
]

app.use(cors())
app.use(bodyParser.json())


app.get('/posts', (req,res) => {
    res.send(posts)
})
app.post('/register', (req,res) => {
    var userData = req.body
    var user = new User(userData)
    user.save((err,result) => {
        if(err){
            console.log('saving user error')
        }
        res.sendStatus(200)
    })
})
app.post('/login', async (req,res) => {
    var userData = req.body

    var user = await User.findOne({email: userData.email})

    if(!user)
        return res.status(401).send({message: 'Email or Password invalid'})

    if(userData.pwd != user.pwd)
        return res.status(401).send({message: 'Email or Password invalid'})

    var payload = {}

    var token = jwt.encode(payload, '123')

    console.log('user:', user);
    //Every jwt:token has three parts: header,payload and signature
    console.log('token', token); 
    res.status(200).send({token})
})

mongoose.connect('mongodb://test:test@ds229790.mlab.com:29790/pssocial', (err) => {
    if(!err)
        console.log('connected to mongodb')
})

app.listen(5000)