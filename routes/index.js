var express = require('express'),
	helloWorld = require('../api/controllers/hello_world');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'DevOps Tutorial App' });
});

/* GET home page. */
router.get('/hello', function(req, res) {
  helloWorld.hello(req, res);
});

module.exports = router;
