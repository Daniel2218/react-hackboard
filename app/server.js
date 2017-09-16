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


router.route("/applications/:id")
  .get(function(req, res){
    Application.findById(req.params.id, function(err, application) {
        console.log(req.params.id);
        if (err) {
            res.send(err);
        }
        res.json(application);
    });
  });

// more routes for our API will happen herers
router.route('/applications')
    .get(function(req, res) {
        Application.find(function(err, applications) {
          if (err) {
            res.send(err);
          }
          res.json(applications);
        });
    });

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
