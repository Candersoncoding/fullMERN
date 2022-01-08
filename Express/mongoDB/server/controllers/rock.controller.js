const Rock = require("../models/rock.model");

module.exports.findAllRocks = (req, res) => {
    Rock.find()
        .then(allRocks => res.json({rocks: allRocks}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}));
}

module.exports.createRock = (req,res) => {
    Rock.create(req.body)
        .then(newRock => res.json({reck: newRock}))
        .catch(err => res.json({message: "didn't quite work out there", error: err}));
}