var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ObjectId     = Schema.ObjectId;

var UsersSchema   = new Schema({
    _id:   ObjectId,
    fname: String,
    lname: String,
    email: String,
    phone: String,
    position: String
});

module.exports = mongoose.model('Users', UsersSchema);
