const mongoose = require('mongoose')

const db = mongoose.connection
db.on('error', (err) => console.error('Mongo connection error:', err))
db.once('open', () => console.log('Mongo connection made!'))

mongoose.connect('mongodb://localhost/linklist')

module.exports = db
