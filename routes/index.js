let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(base_root + '/views/index.html');
});

router.get('/peers', function(req, res, next) {
  res.sendFile(base_root + '/views/index2.html');
});

router.get('/chamarSuporte', function(req, res, next) {
  res.sendFile(base_root + '/views/chamar_suporte.html');
});

module.exports = router;
