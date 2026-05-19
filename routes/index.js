const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.use('/games', require('./games'));

module.exports = router;