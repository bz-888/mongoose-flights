const flightModel = require("../models/flight");

module.exports = {
    create
}

async function create(req, res) {
    try {
        const flightDoc = await flightModel.findById(req.params.id);
        console.log(req.params.id, "<-- req.params.id");
        console.log(flightDoc, "<-- flightDoc");
        console.log(req.body, "<-- req,body");
        flightDoc.destination.push(req.body);
        console.log(flightDoc);
        await flightDoc.save();
        res.redirect(`/flights/${req.params.id}`);
    } catch(err) {
        console.log(err, "<-- ERROR");
        res.send(err);
    }
}