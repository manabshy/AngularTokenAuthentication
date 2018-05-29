var express = require('express')
var cors = require('cors')
var app = express()
var mongoose = require('mongoose')
var jwt = require('jwt-simple')
var bodyParser = require('body-parser')
var User = require('./models/User.js')
var bcrypt = require('bcrypt-nodejs')

var posts = [
    {message: 'Message 1 from the server'},
    {message: 'Message 2 from the server'}
]

mongoose.Promise = Promise

app.use(cors())
app.use(bodyParser.json())


app.get('/posts', (req,res) => {
    res.send(posts)
})
app.get('/users', async (req,res) => {
    try {
        var users = await User.find({}, '-password -__v')
        res.send(users)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)        
    }
})
app.get('/profile/:id', async (req,res) => {
    try {
        var user = await User.findById(req.params.id, '-password -__v')
        res.send(user)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)        
    }
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
    var loginData = req.body

    var user = await User.findOne({email: loginData.email})

    if(!user)
        return res.status(401).send({message: 'Email or Password invalid'})

    bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
        if(!isMatch)
            return res.status(401).send({message: 'Email or Password invalid'})
        
        var payload = {}
    
        var token = jwt.encode(payload, '123')
    
        res.status(200).send({token})
    })
})

mongoose.connect('mongodb://test:test@ds229790.mlab.com:29790/pssocial', (err) => {
    if(!err)
        console.log('connected to mongodb')
})

app.listen(5000)