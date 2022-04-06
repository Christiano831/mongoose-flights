const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket
};

function create(req, res) {
    console.log(req.params.id);
    Flight.findById(req.params.id, function(err, flightDB) {
        req.body.flight = flightDB._id
        Ticket.create(req.body, function(err, tickets) {
            res.redirect(`/flights/${flightDB._id}`);
        });
    });
}
function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {
            flight
        })
    })
}