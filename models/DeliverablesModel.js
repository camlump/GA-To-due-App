const mongoose = require('./connection.js')


const Deliverables = new mongoose.Schema({
 name: String,

 time: Date,

 todo: String,

 isDone: false

})


module.exports = mongoose.model('Deliverables', Deliverables);