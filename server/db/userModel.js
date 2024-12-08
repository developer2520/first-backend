const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please provide name"],
        unique: false
    },
    username: {
        type: String,
        required: [true, "Please provide username"],
        unique: [true, "Username exists"]
    },
    password: {
        type: String,
        required: [true, "Please ecreate a password"],
        unique: false

    }
})

module.exports = mongoose.model.users || mongoose.model("Users", userSchema);