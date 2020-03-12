
const mongoose = require('./connection.js')


const Homework = new mongoose.Schema({
 name: String,

 time: Date,

 todo: String,

 isDone: false

})


module.exports = mongoose.model('Homework', Homework);