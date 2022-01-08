const RockController = require("../controllers/rock.controller");

module.exports = app => {
    app.get("/api/rocks", RockController.findAllRocks);
    app.post("/api/rocks/create", RockController.createRock);
}