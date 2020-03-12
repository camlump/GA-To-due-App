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
const Meetup = require('../models/Meetup.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const  meetupRouter = express.Router()





/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
meetupRouter.get('/',(req, res)=>{
  Meetup.find().then((Meetups)=>{
    res.json(Meetups)
  });
});

meetupRouter.get('/:meetupId',(req, res)=>{
  Meetup.findById(req.params.meetupId).then((job)=>{
    res.json(job)
  });
});

meetupRouter.post('/',(req,res)=>{
  Meetup.create(req.body).then(()=>{
    res.status(200).end();
  })
})

meetupRouter.put('/:meetupId', (req, res)=>{
Meetup.findByIdAndUpdate(req.params.meetupId, req.body).then(()=>{
    res.status(200).end();
  });
});

meetupRouter.delete('/:meetupId', (req, res)=>{
  Meetup.findByIdAndDelete(req.params.meetupId).then(()=>{
    res.status(200).end();
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  meetupRouter
}