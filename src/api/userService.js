const User = require('./models/user');

User.methods(['get', 'post' ]);
User.updateOptions({new: true, runValidators: true});

module.exports = User;
