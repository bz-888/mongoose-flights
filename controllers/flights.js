const flightModel = require("../models/flight");

module.exports = {
    index,
    new: newFlight,
    create
}

async function index(req, res) {
    try {
        const flightDocuments = await flightModel.find({});
        console.log("flightDocuments", flightDocuments)
        res.render("flights/index", {flightDocs: flightDocuments});
    } catch(err) {
        res.send(err);
    }
}

function newFlight(req, res) {
    res.render("flights/new");
}

async function create(req, res) {
    console.log(req.body);

    try {
        const flightDoc = await flightModel.create(req.body);
        console.log(flightDoc, "<-- flight created in DB");
        res.redirect("/flights");
    } catch(err) {
        res.send(err);
    }
}