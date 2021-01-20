const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.index);
router.post('/', scoresCtrl.create);
router.delete('/:id', scoresCtrl.delete);

module.exports = router;