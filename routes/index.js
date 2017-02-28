var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/eval', (req, res, next) => {
  var valor = eval(req.body.expression);
  console.log(valor);
});

module.exports = router;
