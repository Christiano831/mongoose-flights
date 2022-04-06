var express = require('express');
var router = express.Router();
const ticketsController = require('../controllers/tickets');


router.post('/flights/:id/tickets/new', ticketsController.create);
router.get('/flights/:id/tickets/new', ticketsController.new)



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
