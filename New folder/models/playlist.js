const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema({
    song: {
        required: true,
        type: String
    },
    times_played: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Playlist', playlistSchema)