const mongoose = require('./connection.js')


const Jobtracker = new mongoose.Schema({
 name: String,

 time: Date,

 todo: String,

 isDone: false,

 AppStatus: false

})

module.exports = mongoose.model('JobTracker', Jobtracker)

