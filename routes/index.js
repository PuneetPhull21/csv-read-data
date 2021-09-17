var express = require('express');
var router = express.Router();
var controller = require('../services/file.controller.js');
var fileupload = require('../services/file.middleware.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload',fileupload.single('file'),controller.upload);


module.exports = router;
