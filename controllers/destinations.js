const FlightModel = require("../models/flight");

module.exports = {
    create
}

async function create(req, res) {
    try {
        const flightDoc = await FlightModel.findById(req.params.id);
        console.log(req.params.id, "<-- req.params.id");
        console.log(flightDoc, "<-- flightDoc");
        console.log(req.body, "<-- req,body");
        flightDoc.destination.push(req.body);
        console.log(flightDoc);
        await flightDoc.save();
        res.redirect(`/flights/${req.params.id}`);
    } catch(err) {
        console.log(err, "<-- DESTINATION ERROR");
        res.send(err);
    }
}