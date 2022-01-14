const express = require('express');
const postController = require('../controller/postControllers');

const router = express.Router();

// Voir les données
// router.get('/', postController.all_posts)

// Get all posts
router.post('/all', async (req, res) => {
    console.log('Inside the route')
    // const { pseudo, title, body } = req.body;
     // User submits form, asking the db for information
     postController.all_posts()
        .then((response) => {
            res.send(200).json({ result: 'ok', data: response})
        })
        .catch((error) => {
            console.log(error)
            res.send(400).json({ result: 'lol nope', error: error})
        })
});

// Remplir le formulaire pour changer les données...
// router.get('/', postController.add_post_get)
// // ... et sauvegarder
// router.post('/', postController.add_post_post)

// // Select a single post (edit)
// router.get('/:id', postController.post_details)
// router.delete('/:id', postController.post_delete)
// router.put('/:id', postController.post_update)


// Exporter //
module.exports = router;