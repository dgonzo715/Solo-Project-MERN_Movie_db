const MovieController = require('../controllers/movie.controller');

module.exports = function(app){
    // get all movies
    app.get("/api/movies", MovieController.getAllMovies);
    // create a movie
    app.post("/api/movie", MovieController.createMovie);
    // get one movie - create a param variable called "id"
    app.get("/api/movies/:id", MovieController.getOneMovie);
    // update movie
    app.put("/api/movies/:id", MovieController.updateMovie);
    // delete movie
    app.delete("/api/movies/:id", MovieController.deleteMovie);
}