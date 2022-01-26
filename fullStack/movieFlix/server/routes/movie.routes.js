const MoviesController = require("../controller/movies.controller");

module.exports = app => {
    app.get("/movies", MoviesController.findAllMovies);
    app.post("/movie/create", MoviesController.createMovie);
    app.delete("/movie/delete/:id", MoviesController.deleteMovie);
    app.get("/movie/:id", MoviesController.findOneMovie);
    app.put("/movie/update/:id", MoviesController.updateMovie);
    app.put("movie/add/actor/:id", MoviesController.actorUpdateMovie);
}