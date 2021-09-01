const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Topic = require('../../models/Topic');

// @route   POST api/topics
// @desc    Create a new Topic
// @access  Public
router.post('/', 
    [
        check('name', 'Uuuh... We need your topic ఠ ͟ಠ').not().isEmpty(),
        check('emailContributor', 'Uuuh... We need the contributor\'s email  ఠ ͟ಠ').not().isEmpty(),
        check('type', 'Uuuh... We need the type of topic ఠ ͟ಠ').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // TODO : à refacto, est-ce qu'on peut pas faire une décompo de req.body ?
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
            res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
        }
    }
);

module.exports = router;