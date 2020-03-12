const mongoose = require('./connection.js')


const Meetup = new mongoose.Schema({
 name: String,

 time: Date,

 todo: String,

 isDone: false,

 location: String

})

module.exports = mongoose.model('Meetup', Meetup)