const Post = require('../model/post');

// All posts in feed //
const all_posts = () => {
    return new Promise((resolve, reject) => {
        Post.find().sort({ createdAt: -1 })
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
// All posts per user //
const all_posts_by_user = (userID) => {
    return new Promise((resolve, reject) => {
        Post.find({userID: userID}).sort({ createdAt: -1 })
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
// Get single post by user//
const post_details = (id) => {
    return new Promise((resolve, reject) => {
        Post.findById(id)
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

// Create //
// https://www.toolsqa.com/postman/post-request-in-postman/
// https://www.titanwolf.org/Network/q/e3204823-23f8-4aaa-93b5-8aee2dee8374/y
const add_new_post = () => {
    return new Promise((resolve, reject) => {
        const newPost = new Post()
        newPost.save()
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
const get_new_post = () => {
    return new Promise((resolve, reject) => {
        Post.find()
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

// Update //
const update_post = () => {
    return new Promise((resolve, reject) => {
        Post.findByIdAndUpdate(id, {returnDocument: 'after'}, {new: true})
        // Post.findOneAndUpdate({title: title})
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
// Delete //
const delete_post = () => {
    return new Promise((resolve, reject) => {
        Post.findByIdAndDelete(id)
        // Post.findOneAndUpdate({title: title})
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
    all_posts_by_user,
    post_details,
    add_new_post,
    get_new_post,
    update_post,
    delete_post
}