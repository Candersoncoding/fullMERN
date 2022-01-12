const SoccerCleatsController = require("../controller/soccer-cleats.controller");

module.exports = app => {
    app.get("/api/soccer-cleats", SoccerCleatsController.findAllSoccerCleats);
    app.post("/api/soccer-cleats/create", SoccerCleatsController.createSoccerCleats);
}