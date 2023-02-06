// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const Movie = require('../models/Movies.model')
const Celebrity = require('../models/Celebrity.model')

const router = require('express').Router()
// all your routes here

router.get("/create", async (req, res) => {
    try{
        const allCelebrities = await Celebrity.find()
        console.log(allCelebrities)
       
        res.render("movies/new-movie", {allCelebrities});
    }
    catch(error){
        console.log(error)
    }
});


router.post("/create", async (req, res) => {
    await Movie.create(req.body)
    res.render("movies/movies");
});


router.get("/", (req, res) => {

    res.render("movies/movies");
});

module.exports = router