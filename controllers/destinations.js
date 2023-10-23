const flightModel = require("../models/flight");

module.exports = {
    create
}

function create(req, res) {
    console.log(req.params.id, "<-- req.params.id");
    console.log(req.body, "<-- req.body")
}