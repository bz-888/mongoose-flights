const FlightModel = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function index(req, res) {
    try {
        const flightDocuments = await FlightModel.find({});
        console.log("all flights from flights/index below");
        console.log("flightDocuments", flightDocuments);
        console.log("all flights from flights/index above");
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
        const flightDoc = await FlightModel.create(req.body);
        console.log(flightDoc, "<-- flight created in DB");
        res.redirect("/flights");
    } catch(err) {
        res.send(err);
    }
}

async function show(req, res) {
    // console.log(req.params.id);
    const flightDoc = await FlightModel.findById(req.params.id);
    console.log(flightDoc, "<-- show function flight");
    res.render("flights/show", { flightShow: flightDoc});
} 