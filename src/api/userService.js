const User = require('./models/user');
const errorHandler = require('./common/errorHandler');

User.methods(['get', 'post' ]);
User.updateOptions({new: true, runValidators: true});
User.after('post', errorHandler);

module.exports = User;
