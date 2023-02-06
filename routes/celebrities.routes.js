// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const Celebrity = require('../models/Celebrity.model')
const router = require('express').Router()
// all your routes here

router.get("/create", (req, res) => {

    res.render("celebrities/new-celebrity");
  });


  router.get("/", (req, res) => {

    res.render("celebrities");
  });



  router.post("/create", async (req, res) => {
      
      try{
        const newCelebrity = req.body
        console.log(newCelebrity)
        await Celebrity.create(req.body)
        res.redirect("/");
    }
    catch(error){
        console.log(error)
    }
    
  });

module.exports = router



