/* Import the mongoose module
 *
 */
// MONGO ATLAS CONNECTION STRING
// mongodb+srv://heroku_pbb3c6f6:<password>@cluster-pbb3c6f6.5hxov.mongodb.net/heroku_pbb3c6f6?retryWrites=true&w=majority
const mongoose = require('mongoose');

/* Step 1.
 *
 * TODO: replace <db-name> with the name of your mongo database. 
 * This will need to change for every new project you create.
 *
 */
const connectionString = process.env.MONGODB_URI || "mongodb+srv://heroku_pbb3c6f6:Akimbo2020@cluster-pbb3c6f6.5hxov.mongodb.net/gadue?retryWrites=true&w=majority";


/* Step 2
 *
 * Open up a connection to the mongo database.
 *
 * NOTE: newUrlParser diables a deprecation warning
 */
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


/* Export the mongoose object.
 *
 * This will allow us to use the same connection to our DB
 * across our different controllers.
 *
 */
module.exports = mongoose
