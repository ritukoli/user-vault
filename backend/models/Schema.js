const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    role: String
})

const userModel = mongoose.model("userinfo", userschema)

module.exports = userModel