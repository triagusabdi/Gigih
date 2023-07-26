require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/routes")
const DB_URL = process.env.DB_URL
const PORT = process.env.PORT

const app = express()

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err)
});

db.on('connected', () => {
    console.log("berjalan")
});

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/api/v1/', router)

app.listen(PORT, (req,res) => {
    console.log(`server run on port ${PORT}`)  
})

// DRY : Dont repeat yourself