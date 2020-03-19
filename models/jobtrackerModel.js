const mongoose = require('./connection.js')


const Jobtracker = new mongoose.Schema({
 name: String,

 time: Date,

 todo: String,

 isDone: false,

 AppStatus: [
    'Pinned',
     'Applied',
     'Interview',
    'Technical',
    'Offered'
 ]
 

})

module.exports = mongoose.model('JobTracker', Jobtracker)

