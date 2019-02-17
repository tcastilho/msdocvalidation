const express = require('express'),
  search = require('../controllers/search-controller'),
  router = express.Router();

router.get('/', search.controller);

module.exports = router