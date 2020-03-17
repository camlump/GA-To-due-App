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
const Project = require('../models/ProjectModel.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const projectRouter = express.Router()





/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
projectRouter.get('/',(req, res)=>{
  Project.find().then((Projects)=>{
    res.json(Projects)
  });
});

projectRouter.get('/:projectId',(req, res)=>{
  Project.findById(req.params.projectId).then((project)=>{
    res.json(project)
  });
});

projectRouter.post('/',(req,res)=>{
  Project.create(req.body).then(()=>{
    res.status(200).end();
  })
})

projectRouter.put('/:projectId', (req, res)=>{
  Project.findByIdAndUpdate(req.params.projectId, req.body).then(()=>{
    res.status(200).end()
  })
})

// projectRouter.put('/:projectId', (req, res)=>{
//   Project.findByIdAndUpdate(req.params.projectId, req.body).then(()=>{
//     res.status(200).end();
//   });
// });

projectRouter.delete('/:projectId', (req, res)=>{
  Project.findByIdAndDelete(req.params.projectId).then(()=>{
    res.status(200).end();
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  projectRouter
}