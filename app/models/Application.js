var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ObjectId     = Schema.ObjectId;

var ApplicationSchema   = new Schema({
    _id:   ObjectId,
    fname: String,
    lname: String,
    hacks: Number,
    email: String
});

module.exports = mongoose.model('Application', ApplicationSchema);
