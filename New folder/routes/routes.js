const express = require("express")
const router = express.Router()
const Song = require("../models/song")
const Playlist = require("../models/playlist")

router.post('/song', (req, res) => {
    const song = new Song({
        title: "bebas",
        director: "bebas"
    })

    try {
        const SongtoSave = song.save()
        res.status(201).json({
            message: "Data terkirim"
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const allsong = await Song.find()
        res.status(200).json({
            songs: allsong
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

router.get('/getsong/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id)
        res.status(200).json({ song })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

router.patch('/updatesong/:id', async (req, res) => {
    try {
        const {id} = req.params
        const payload = req.body
        const option = { new: true }

        const result = await Song.findByIdAndUpdate(
            id, payload, option 
        )

        res.send(result)
        
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

router.delete('/deletesong/:id', async (req, res) => {
    try {
        const {id} = req.params

        const result = await Song.findByIdAndDelete(id)

        res.status(200).json({
            message: `Data ${result.title} berhasil dihapus`
        })
        
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})


router.post('/playlist_post', (req, res) => {
    const playlist = new Playlist({
        song: "song name",
        times_played: 5
    })

    try {
        const playlisttoSave = playlist.save()
        res.status(201).json({
            message: "Data terkirim"
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})


router.get('/getAll_playlist', async (req, res) => {
    try {
        const allplaylist = await Playlist.find().sort({ times_played: -1 })
        res.status(200).json({
            Playlist: allplaylist
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})


module.exports = router;

