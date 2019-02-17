const express = require('express'),
  blacklist = require('../controllers/blacklist-controller'),
  router = express.Router();

router.post('/blacklist', blacklist.controller);

module.exports = router