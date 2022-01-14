const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('Inside the route')
    res.send(200).json({ result: 'ok', data: response})
});

module.exports = router;