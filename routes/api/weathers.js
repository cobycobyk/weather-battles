const express = require('express');
const router = express.Router();
const weathersCtrl = require('../../controllers/weathers');

router.get('/', weathersCtrl.index);

module.exports = router;