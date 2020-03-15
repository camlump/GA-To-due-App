/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the model files
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateModel` to something more sensible (e.g:
 * `Shops`)
 *
 * NOTE: You may need to import more than one model to create the 
 * controller you need.
 * 
 */
const JobTracker = require('../models/jobtrackerModel.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const  jobTrackerRouter = express.Router()





/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
jobTrackerRouter.get('/',(req, res)=>{
  JobTracker.find().then((Jobs)=>{
    res.json(Jobs)
  });
});

jobTrackerRouter.get('/:jobtrackerId',(req, res)=>{
  JobTracker.findById(req.params.jobtrackerId).then((job)=>{
    res.json(job)
  });
});

jobTrackerRouter.post('/',(req,res)=>{
  JobTracker.create(req.body).then(()=>{
    res.status(200).end();
  })
})

jobTrackerRouter.put('/:jobtrackerId', (req, res)=>{
  JobTracker.findByIdAndUpdate(req.params.jobtrackerId, req.body).then(()=>{
    res.status(200).end();
  });
});

jobTrackerRouter.delete('/:jobtrackerId', (req, res)=>{
  JobTracker.findByIdAndDelete(req.params.jobtrackerId).then(()=>{
    res.status(200).end();
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  jobTrackerRouter
}