var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ObjectId     = Schema.ObjectId;

var JudgesSchema   = new Schema({
    _id:   ObjectId,
    fname: String,
    lname: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Judges', JudgesSchema);
