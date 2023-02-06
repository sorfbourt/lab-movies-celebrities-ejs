// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const Movie = require('../models/Movies.model')
const Celebrity = require('../models/Celebrity.model')

const router = require('express').Router()
// all your routes here

router.get("/:id", async (req, res) => {
    const movieID = req.params.id
    const movieDetails = await Movie.findById(movieID).populate('cast')
    console.log(movieDetails)
    res.render("movies/movie-details", {movieDetails});
});


router.get("/create", async (req, res) => {
    try{
        const allCelebrities = await Celebrity.find()
        //console.log(allCelebrities)
       
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


router.get("/", async (req, res) => {
    const allMovies = await Movie.find().populate('cast')
    res.render("movies/movies", {allMovies});
});


module.exports = router