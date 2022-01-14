const Post = require('../model/post');

const all_posts = (userID) => {
    return new Promise((resolve, reject) => {
        Post.find({userID: userID})
        .then((response) => {
            console.log(response)
            resolve(response)
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        })
    })
}

// exportation vers les routes
module.exports = {
    all_posts,
}