var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ObjectId     = Schema.ObjectId;

var SponsorsSchema   = new Schema({
    _id:   ObjectId,
    fname: String,
    lname: String,
    email: String,
    phone: String,
    donationAmount: Number,
    donationRecieved: String
});

module.exports = mongoose.model('Sponsors', SponsorsSchema);
