const Product = require('./models/product');
const errorHandler = require('./common/errorHandler');

Product.methods(['get', 'post', 'put', 'delete' ]);
Product.updateOptions({new: true, runValidators: true});
Product.after('post', errorHandler)
  .after('put', errorHandler)
  .after('get',errorHandler)
  .after('delete', errorHandler);

Product.route('count', (req, res, next) => {
  Product.count((error, value) => {
    if(error) {
      res.status(500).json({errors: [error]});
    } else {
      res.status(200).json({value});
    }
  });
});

Product.route(':id', (req, res, next) => {
  //res.send(req.param.id);

  Product.find({"_id": req.param.id}, (error, items) => {
    if (error) {
      res.status(500).json({errors: [error]});
    } else {
      res.status(200).json(items);
    }
  });

  });

module.exports = Product;
