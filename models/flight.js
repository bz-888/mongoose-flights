const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ["AUS", "IAH", "DFW", "FOC", "LAX", "LHR"],
        default: "AUS"
    },

    arrival: {
        type: Date
    }
})

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ["American", "Delta", "United"]
    },
    
    airport: {
        type: String,
        enum: ["AUS", "IAH", "DFW", "FOC", "LAX", "LHR"],
        default: "AUS"
    },

    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },

    departs: {
        type: Date,
        // today's date plus (365 days * 24 hours * 60 minutes * 60 sec * 1000 ms)
        default: Date.now() + (365 * 24 * 60 * 60 * 1000) 
    },

    destination: [destinationSchema]
});


module.exports = mongoose.model("Flight", flightSchema);