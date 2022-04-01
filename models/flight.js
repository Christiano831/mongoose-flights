const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightsSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String, 
        default: 'DEN',
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {type: Date, default: Date.now() + 365*24*60*60000}
  });

  module.exports = mongoose.model('Flight', flightsSchema);