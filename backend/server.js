var express = require('express')
var cors = require('cors')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var auth = require('./auth.js')

var User = require('./models/User.js')
var Post = require('./models/Post.js')


mongoose.Promise = Promise

app.use(cors())
app.use(bodyParser.json())


app.get('/posts/:id', async (req,res) => {
    var author = req.params.id
    var posts = await Post.find({author})
    res.send(posts)
})
app.post('/post', (req, res ) => {
    var postData = req.body
    postData.author = '5b15b62565ad1f92cfc2158d'
    var post = new Post(postData)
    post.save((err, result) => {
        if (err) {
            console.error('saving post error')
            return res.status(500).send({message: 'saving post error'})
        }

        res.sendStatus(200)
    })
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

mongoose.connect('mongodb://test:test@ds229790.mlab.com:29790/pssocial', (err) => {
    if(!err)
        console.log('connected to mongodb')
})

app.use('/auth', auth)
app.listen(5000)