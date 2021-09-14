const Movie = require('../models/movie.model');

// get all movies
module.exports.getAllMovies = (req, res) => {
    console.log("Inside getAllMovies");

    Movie.find({}) //find all movie documents
    .then((allMovies) => {
       console.log(allMovies);
       res.json(allMovies); 
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};
// creat a movie
module.exports.createMovie = (req, res) => {
    console.log("Inside createMovies");
    console.log(req.body);

    Movie.create(req.body)
    .then((newMovie) => {
        console.log(newMovie);
        res.json(newMovie);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};

// get one movie - create a param variable called "id"
module.exports.getOneMovie = (req, res) => {
    console.log("inside getOneMovie");
    console.log(req.params.id);

    Movie.findById(req.params.id)
    .then((oneMovie) => {
        console.log(oneMovie);
        res.json(oneMovie);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};

// update movie
module.exports.updateMovie = (req, res) => {
    console.log("inside updateMovie");
    console.log(req.params.id);  // the document we need to update
    console.log(req.body);      // the data we will be updating with

    // update by default will send back the original document.... not the updated one
    // update will not validate your data by default
    Movie.findByIdAndUpdate(req.params.id, req.body,{
        new: true, // return the updated document instead of the original
        runValidators: true // this will validate the json data just like the create
    })
    .then((updatedMovie) => {
        console.log(updatedMovie);
        res.json(updatedMovie);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};

// delete movie
module.exports.deleteMovie = (req, res) => {
    console.log("inside deleteMovie");
    console.log(req.params.id);

    Movie.findByIdAndDelete(req.params.id)
    .then((deleteMovie) => {
        // this is the deleted document....your last chance!!!
        console.log(deleteMovie);
        res.json(deleteMovie);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
};
