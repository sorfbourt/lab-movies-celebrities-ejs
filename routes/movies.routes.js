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
    try{
    await Movie.create(req.body)
    const allMovies = await Movie.find().populate('cast')
    res.render("movies/movies", {allMovies});
}
catch(error){
    console.log(error)
}
});


router.get("/:id", async (req, res) => {
    try{
        const movieID = req.params.id
    const movieDetails = await Movie.findById(movieID).populate('cast')
    console.log(movieDetails)
    res.render("movies/movie-details", {movieDetails});
    }
    catch(error){
        console.log(error)
    }
});




router.post("/:id/delete", async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id)
    res.redirect("/")
});


router.get("/:id/edit", async (req, res) => {
    

    const editedMovie = await Movie.findById(req.params.id).populate('cast')
    const allCelebrities = await Celebrity.find()
    console.log("editedMovie: ", editedMovie)


res.render('movies/edit-movie', {editedMovie, allCelebrities})
});

router.post("/:id/edit", async (req, res) => {
    const editedMovie = req.body
    const movieId = req.params.id
    //console.log("editedMovie", editedMovie)
    //console.log("movieId", movieId)
    const movieDetails = await Movie.findById(movieId).populate('cast')
    await Movie.findByIdAndUpdate(movieId, editedMovie)

res.render('movies/movie-details', {movieDetails, update:true})
});



router.get("/", async (req, res) => {
    const allMovies = await Movie.find().populate('cast')
    res.render("movies/movies", {allMovies});
});


module.exports = router