const express = require('express');
const postController = require('../controller/postControllers');

const router = express.Router();

// Get all posts
router.get('/all', async (req, res) => {
    const { userID } = req.body;
    console.log(req.body);
    console.log('Inside the route')

     postController.all_posts(userID)
        .then((response) => {
            res.status(200).json({ result: 'ok', data: response})
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json({ result: 'lol nope', error: error})
        })
});


// Exporter //
module.exports = router;