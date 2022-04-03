const Destination = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Destination.findById(req.params.id, function(err, flightDB) {
        flightDB.destinations.push(req.body);
        flightDB.save(function(err) {
            res.redirect(`/flights/${flightDB._id}`)
        });
   });
};