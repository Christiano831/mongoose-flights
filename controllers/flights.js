const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    create,
    new: newFlight,
    show
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        });
    });
}

function create(req, res) {
    const flight = Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights/new');
    })
}

function newFlight(req, res) {
    //res.render('flights/new');
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {departsDate});
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {title: 'Flight Detail', flight, tickets});
        });
        
    });
}

// function show(req, res) {
//     Flight.findById(req.params.id, function (err, flightDB) {
//         res.render('flights/show', {title: 'Flight Detail', flight: flightDB});
//     });
// }