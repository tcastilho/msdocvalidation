const express = require('express'),
  whitelist = require('../controllers/whitelist-controller'),
  router = express.Router();

router.post('/', whitelist.controller);

module.exports = router