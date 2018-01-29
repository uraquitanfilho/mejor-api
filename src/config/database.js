const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://admin:pjadm2109@ds113098.mlab.com:13098/mejor_db');

//Custom Errors

mongoose.Error.messages.Number.min = "The '{VALUE}' entered is less than the minimum limit of '{MIN}'.";
mongoose.Error.messages.Number.max = "The '{VALUE}' entered is more than the maximum limit of '{MAX}'.";
