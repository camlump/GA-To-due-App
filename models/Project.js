const mongoose = require('./connection.js')


const Project = new mongoose.Schema({
 name: String,

 time: Date,

 todo: String,

 isDone: false,

 didPresent: false

})


module.exports = mongoose.model('Project', Project);