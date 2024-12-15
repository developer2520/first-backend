const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
        required: true,
    },
    route: {
        type: String,
    },
    title: {
        type: String,

    },
    description: {
        type: String
    }


})