const mongoose = require('mongoose');
//mongoose.Promise = global.promise;
module.exports = mongoose.connect('mongodb://admin:pjadm2109@ds113098.mlab.com:13098/mejor_db');
