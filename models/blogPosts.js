const mongoose = require('mongoose')

//create schema
const Schema = mongoose.Schema;
const BlogpostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//model collection
const BlogPost = mongoose.model('BlogPost', BlogpostSchema);

module.exports = BlogPost;