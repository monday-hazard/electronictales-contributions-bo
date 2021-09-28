const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    world: {
        type: String, // By reviewer
    },
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String, // By reviewer in Front
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    status: {
        type: String,
        default: 'review',
    },
    originalContent: {
        // in HTML
        type: String,
        required: true,
    },
    editedContent: {
        // in HTML
        type: String,
    },
    richLinks: {
        type: Array, // By author only
    },
    thumbnail: {
        type: String, // By reviewer (V1)
    },
    category: {
        type: String, // By reviewer only
    },
    topicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topics',
        required: true,
    },
    publicationDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Article = mongoose.model('article', ArticleSchema);
