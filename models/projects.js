const mongoose = require('./connection.js')


const project = new mongoose.Schema({
 name: String,

 time: Date,

 todo: String,

 isDone: false,

 didPresent: false

})


module.exports = mongoose.model('project', project);