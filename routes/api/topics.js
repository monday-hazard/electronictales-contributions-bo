const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Topic = require('../../models/Topic');

// @route   POST api/topics
// @desc    Create a new Topic
// @access  Public
router.post('/', 
    [
        check('name', 'Topic is required').not().isEmpty(),
        check('emailContributor', 'Email is required').not().isEmpty(),
        check('type', 'Type is required').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(req.body);
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // TODO : à refacto, est-ce qu'on peut pas juste dire req.body directement ?
            const newTopic = new Topic({
                name: req.body.name,
                emailContributor: req.body.emailContributor,
                slackContributor: req.body.slackContributor,
                type: req.body.type,
                lockedBy: req.body.lockedBy
            });

            const topic = await newTopic.save();

            res.json(topic);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;