
const mongoose = require('./connection.js')


const homework = new mongoose.Schema({
 name: String,

 time: Date,

 todo: String,

 isDone: false

})


module.exports = mongoose.model('homework', homework);