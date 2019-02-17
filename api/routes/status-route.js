const express = require('express'),
  status = require('../controllers/status-controller'),
  router = express.Router();

router.get('/status', status.controller);

module.exports = router