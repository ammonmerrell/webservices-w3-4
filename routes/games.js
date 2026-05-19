const express = require('express');
const router = express.Router();

const gameControllers = require('../controllers/games.js');

router.get('/', gameControllers.getAll);

module.exports = router;