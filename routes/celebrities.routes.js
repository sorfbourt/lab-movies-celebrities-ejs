// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const Celebrity = require('../models/Celebrity.model')
const router = require('express').Router()
// all your routes here

router.get("/create", (req, res) => {

    res.render("celebrities/new-celebrity");
});


router.get('/', async (req, res) => {


try {
    const allCelebrities = await Celebrity.find()
    console.log('all Celebrities :', allCelebrities)
    //res.send('Hello!')
    res.render('celebrities/celebrities', {allCelebrities})
  } catch (error) {
    console.log('Route to all celebrities', error)
  }
  })
  


router.post("/create", async (req, res) => {
    
    try{
        const newCelebrity = req.body
        console.log(newCelebrity)
        await Celebrity.create(req.body)
        res.redirect("/celebrities");
    }
    catch(error){
        console.log(error)
    }
    
});


// router.get("/celebrities", (req, res) => {
//     res.render("celebrities");
// });



module.exports = router



