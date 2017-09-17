var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongo = require('mongodb');
var port = process.env.PORT || 8080;
var router = express.Router();              // get an instance of the express Router
var Application = require('./models/Application');
var Sponsor = require('./models/Sponsor');
var Prize = require('./models/Prize');
var Judge = require('./models/Judge');
var User = require('./models/User');
var mongoose   = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
mongoose.connect("mongodb://localhost:27017/hackboard"); // connect to our database

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen herers
router.route('/applications').get(function(req, res) {
  findWrapper(req, res, Application);
});

router.route("/applications/:id").get(function(req, res){
  Application.findById(req.params.id, function(err, application) {
      if (err) {
          res.send(err);
      }
      res.json(application);
  });
});

router.route('/sponsors').get(function(req, res) {
  findWrapper(req, res, Sponsor);
});

router.route('/sponsors:id').get(function(req, res){
  Sponsor.findById(req.params.id, function(err, sponsor) {
      if (err) {
          res.send(err);
      }
      res.json(sponsor);
  });
});

router.route('/users').get(function(req, res) {
  findWrapper(req, res, User);
});

router.route('/prizes').get(function(req, res) {
  findWrapper(req, res, Prize);
});

function findWrapper(req, res, Model) {
  Model.find(function(err, documents) {
    if (err) {
      res.send(err);
    }
    res.json(documents);
  });
}
// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
