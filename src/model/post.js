const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    pseudo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userID: {
        type: String
    }
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;