const Movies = require("../models/movies.model");

module.exports.findAllAuthors = (req, res) => {
    Movies.find()
        .then(allMovies => res.json({Movie: allMovies}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}));
}

module.exports.createMovie = (req,res) => {
    Movies.create(req.body)
        .then(newMovie => res.json({newMovie: newMovie}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}));
}

module.exports.deleteMovie = (req,res) => {
    Movies.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json({deleted: deleteConfirmation}))
        .catch(err=> res.json({message: "didn't quite work out there", error: err}));
}

module.exports.findOneMovie = (req,res) => {
    Movies.findOne({_id: req.params.id})
        .then(oneMovie => res.json({Movie: oneMovie}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}))
}

module.exports.updateMovie = (req,res) => {
   Movies.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedMovie => res.json({Movie: updatedMovie}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}))
}