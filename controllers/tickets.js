const FlightModel = require("../models/ticket");

module.exports = {
    create
}

async function create(req, res) {
    try {
        const flightDoc = await FlightModel.findById(req.params.id);
        const ticketDocs = await Ticket.find({flight: flightDoc._id});
        console.log(flightDoc._id);
        ticketDocs.flight = flightDoc._id;
        console.log(ticketDocs);

    } catch(err) {
        console.log(err, "<-- TICKETS ERROR");
        res.send(err);
    }
}