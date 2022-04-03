var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');

router.get('/new', flightsController.new);
router.post('/', flightsController.create);
router.get('/index', flightsController.index);
router.get('/:id', flightsController.show)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
