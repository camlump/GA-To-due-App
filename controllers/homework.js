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
const Homework = require('../models/Homework')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const homeworkRouter = express.Router()





/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
homeworkRouter.get('/',(req, res)=>{
  Homework.find().then((Homeworks)=>{
    res.json(Homeworks)
  });
});

homeworkRouter.get('/:homeworkId',(req, res)=>{
  Homework.findById(req.params.homeworkId).then((Hws)=>{
    res.json(Hws)
  });
});

homeworkRouter.post('/',(req,res)=>{
  Homework.create(req.body).then(()=>{
    res.status(200).end();
  })
})

homeworkRouter.put('/:homeworkId', (req, res)=>{
  Homework.findByIdAndUpdate(req.params.homeworkId, req.body).then(()=>{
    res.status(200).end();
  });
});

homeworkRouter.delete('/:homeworkId', (req, res)=>{
  Homework.findByIdAndDelete(req.params.homeworkId).then(()=>{
    res.status(200).end();
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  homeworkRouter
}