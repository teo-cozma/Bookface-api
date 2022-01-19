const express = require('express');
const postController = require('../controller/postControllers');

const router = express.Router();

// Get all posts //
router.get('/all', async (req, res) => {
    const { userID } = req.body;
    console.log(req.body);
    console.log('Inside the route')

    await postController.all_posts()
        .then((response) => {
            res.status(200).json({ result: 'ok', data: response})
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json({ result: 'lol nope', error: error})
        })
});
// Get user posts //
router.get('/all/user', async (req, res) => {
    const { userID } = req.body;
    console.log(req.body);
    console.log('Inside the route')

    await postController.all_posts_by_user(userID)
        .then((response) => {
            res.status(200).json({ result: 'ok', data: response})
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json({ result: 'lol nope', error: error})
        })
});
// Get single post by user//
router.get('/all/user/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log('Inside the route')

    await postController.post_details(id)
        .then((response) => {
            res.status(200).json({ result: 'ok', data: response})
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json({ result: 'lol nope', error: error})
        })
});

// Create a new post //
router.post('/all/user/create', async (req, res) => {
    const { newPost } = req.body;
    console.log(req.body);
    console.log('Inside the route')

    postController.add_new_post(newPost)
        .then((response) => {
            res.status(200).json({ result: 'ok', data: response})
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json({ result: 'lol nope', error: error})
        })
});
router.get('/all', async (req, res) => {
    const { newPost } = req.body;
    console.log(req.body);
    console.log('Inside the route')

    postController.get_new_post(newPost)
        .then((response) => {
            res.status(200).json({ result: 'ok', data: response})
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json({ result: 'lol nope', error: error})
        })
});

// Update existing post //
router.put('/all/user/:id/edit', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log('Inside the route')

    await postController.update_post(id)
        .then((response) => {
            res.status(200).json({ result: 'ok', data: response})
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json({ result: 'lol nope', error: error})
        })
});

// Delete existing post //
router.delete('/all/user/:id/edit', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log('Inside the route')

    await postController.delete_post(id)
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