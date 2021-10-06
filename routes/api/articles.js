const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Article = require('../../models/Article');
const Topic = require('../../models/Topic');
const User = require('../../models/User');

const { confirmMailPostArticle } = require('../../mailer/sendMailer');

// @route  GET api/articles
// @desc   Get all articles
// @access Public
router.get('/', [], async (req, res) => {
    try {
        const articles = await Article.find().sort({ publicationDate: -1 });
        res.json(articles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
    }
});

// @route  GET api/articles/:id
// @desc   Get article by Id
// @access Public
router.get('/:id', [], async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        if (!article) {
            return res
                .status(404)
                .json({ msg: 'Article not found ! ┐(´д｀)┌' });
        }

        res.json(article);
    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Article ID not valid (°◇°)' });
        }
        res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
    }
});

// @route  GET api/articles/user/:userId
// @desc   Get articles by User
// @access Private
router.get('/user/:userId', auth, async (req, res) => {
    try {
        // Check if user requesting has rights to do it
        const authenticatedUser = await User.findById(req.user.id);

        // Authenticated user must be author user itself, admin or reviewer
        if (
            authenticatedUser.roles !== 'reviewer' &&
            authenticatedUser.roles !== 'admin' &&
            authenticatedUser.id !== req.params.userId
        ) {
            return res.status(401).json({ msg: 'User not authorized >:[ ' });
        }

        // Check if user requested exists
        const user = await User.findById(req.params.userId);

        if (!user) {
            return res
                .status(404)
                .json({ msg: 'User author not found ! ┐(´д｀)┌' });
        }

        // Fetch all articles by the requested user
        const articlesByUser = await Article.find({
            authorId: req.params.userId,
        });

        res.json(articlesByUser);
    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'User ID not valid (°◇°)' });
        }
        res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
    }
});

// @route  POST api/articles/
// @desc   Submit new article
// @access Private
router.post(
    '/',
    [
        auth,
        [
            check('title', 'Hey, your article needs a title ! ಠ_ಠ')
                .not()
                .isEmpty(),
            check(
                'originalContent',
                'Ehrm, looks like you submitted ... emptiness ! (◔ڼ◔)'
            )
                .not()
                .isEmpty(),
            check('topicId', 'Which topic was this again ? 눈_눈')
                .not()
                .isEmpty(),
            check(
                'type',
                'You need to specify the type of your submission, you know ? ¬_¬'
            )
                .not()
                .isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { type, title, originalContent, richLinks, topicId } =
                req.body;

            const newArticle = new Article({
                type,
                title,
                originalContent,
                richLinks,
                topicId,
                authorId: req.user.id,
            });

            const article = await newArticle.save();
            const currentUser = await User.findById(req.user.id);
            const currentUserEmail = currentUser.email;
            const currentUserName = currentUser.userName;

            res.json(article);

            confirmMailPostArticle(
                currentUserEmail,
                currentUserName,
                article.title
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
        }
    }
);

// @route  PUT api/articles/:id
// @desc   Edit new article
// @access Private
router.put('/:id', auth, async (req, res) => {
    const {
        world,
        type,
        title,
        slug,
        status,
        editedContent,
        thumbnail,
        category,
    } = req.body;

    let articleFields = {};

    if (world) articleFields.world = world;
    if (type) articleFields.type = type;
    if (title) articleFields.title = title;
    if (slug) articleFields.slug = slug;
    if (status) articleFields.status = status;
    if (editedContent) articleFields.editedContent = editedContent;
    if (thumbnail) articleFields.thumbnail = thumbnail;
    if (category) articleFields.category = category;

    try {
        console.log('article id:', req.params.id);
        let article = await Article.findById(req.params.id);

        if (article) {
            // Check user
            console.log('user id:', req.user.id);
            const authenticatedUser = await User.findById(req.user.id);

            if (
                authenticatedUser.roles !== 'reviewer' &&
                authenticatedUser.roles !== 'admin'
            ) {
                return res
                    .status(401)
                    .json({ msg: 'User not authorized >:[ ' });
            }

            // Update
            article = await Article.findOneAndUpdate(
                { id: req.params.id },
                { $set: articleFields },
                { new: true }
            );
            return res.json(article);
        }
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Article ID not valid ⊙︿⊙' });
        }
        res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
    }
});

// @route  DELETE api/articles/:id
// @desc   Delete article
// @access Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        if (!article) {
            return res.status(404).json({ msg: 'Article not found :(' });
        }

        const authenticatedUser = await User.findById(req.user.id);

        if (
            authenticatedUser.roles !== 'reviewer' &&
            authenticatedUser.roles !== 'admin'
        ) {
            return res.status(401).json({ msg: 'User not authorized >:[ ' });
        }

        await article.remove();
        return res.json({ msg: 'Article removed (｀∀´)Ψ' });
    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Topic ID not valid ⊙︿⊙' });
        }
        res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
    }
});

module.exports = router;
