const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userModel = require("./models/Schema")

const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => { console.log("mongo connected") })
    .catch(err => {
        console.log("connection issue", err)
    })

app.post('/createUser', (req, res) => {
    userModel.create(req.body)
        .then(userinfo => res.json(userinfo))
        .catch(err => res.json(err))
})

app.get('/', (req, res) => {
    userModel.find({})
        .then(userinfo => res.json(userinfo))
        .catch(err => res.json(err))
})

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id
    userModel.findById({ _id: id })
        .then(userinfo => res.json(userinfo))
        .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id
    userModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        role: req.body.role
    }).then(userinfo => res.json(userinfo))
        .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res)=>{
    const id = req.params.id
    userModel.findByIdAndDelete({_id : id})
    .then(userinfo => res.json(userinfo))
        .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log("server is running ")
})

