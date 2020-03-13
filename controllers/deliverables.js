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
const Deliverable = require('../models/Deliverables.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const deliverableRouter = express.Router()





/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
deliverableRouter.get('/',(req, res)=>{
  Deliverable.find().then((delives)=>{
    res.json(delives)
  });
});

deliverableRouter.get('/:deliverableId',(req, res)=>{
  Deliverable.findById(req.params.deliverableId).then((deliverable)=>{
    res.json(deliverable)
  });
});

deliverableRouter.post('/',(req,res)=>{
  Deliverable.create(req.body).then(()=>{
    res.status(200).end();
  })
})

deliverableRouter.put('/:deliverableId', (req, res)=>{
  Deliverable.findByIdAndUpdate(req.params.deliverableId, req.body).then(()=>{
    res.status(200).end();
  });
});

deliverableRouter.delete('/:deliverableId', (req, res)=>{
  Deliverable.findByIdAndDelete(req.params.deliverableId).then(()=>{
    res.status(200).end();
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  deliverableRouter
}