const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    director: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Movie', songSchema)