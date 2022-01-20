const AuthorsController = require("../controller/authors.controller");

module.exports = app => {
    app.get("/authors", AuthorsController.findAllAuthors);
    app.post("/author/create", AuthorsController.createAuthor);
    app.delete("/author/delete/:id", AuthorsController.deleteAuthor);
    app.get("/author/:id", AuthorsController.findOneAuthor);
    // app.put("/author/update/:id", AuthorsController.updateAuthor);
}