const User = require('./models/user');
const errorHandler = require('./common/errorHandler');

User.methods(['get', 'post', 'put' ]);
User.updateOptions({new: true, runValidators: true});
User.after('post', errorHandler).after('get', errorHandler).after('put', errorHandler);

User.route(':email', (req, res, next) => {
    User.find({"email": req.params.email}, (error, items) => {
      if (error) {
        res.status(500).json({errors: [error]});
      } else {
        res.status(200).json(items);
      }
  });


  });

module.exports = User;
