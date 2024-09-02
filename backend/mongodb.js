const mongoose = require('mongoose')
require('dotenv').config()

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((r) => console.log('Connected to MongoDB'))
    .catch((e) => console.error(e))

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Connected to MongoDB')
})

module.exports = db
