const express = require('express');
const router = express.Router();

const gameControllers = require('../controllers/games.js');

router.get('/', gameControllers.getAll);
router.get('/:id', gameControllers.getSingle);

module.exports = router;