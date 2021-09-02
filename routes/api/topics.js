const { response } = require('express');
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
            const { name, emailContributor, slackContributor, type, lockedBy } = req.body;

            const newTopic = new Topic({
                name,
                emailContributor,
                slackContributor,
                type,
                lockedBy
            });

            const topic = await newTopic.save();

            res.json(topic);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
        }
    }
);



// @route   GET api/topics
// @desc    get all Topics
// @access  Private
// TODO add middleweare 'authentification'
router.get('/', async (req, res)=>{
    try{
        const topics = await Topic.find().sort({ creationDate: -1 });
        res.json(topics);
    } catch (err){
        console.error(err.message);
            res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
    }
})


// @route   GET api/topics/:id
// @desc    get Topic by ID
// @access  Private
// TODO add middleweare 'authentification'
router.get('/:id', async (req, res) => {
    try {
        const topic = await Topic.findById(req.params.id);

        if (!topic) {
            return res.status(404).json({ msg: "Topic not found ! ┐(´～｀)┌" });
        }

        res.json(topic);
    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Topic ID not valid ⊙︿⊙" });
        }
        res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
    }
})

// @route   DELETE api/topics/:id
// @desc    delete Topic by ID
// @access  Private
// TODO add middleware 'authentification'
router.delete('/:id', async (req, res) => {
    try {
        const topic = await Topic.findById(req.params.id);

        if (!topic) {
            return res.status(404).json({ msg: "Topic not found ! ┐(´～｀)┌" });
        }

        // TODO check user
        // ...

        await topic.remove();

        res.json({ msg: 'Topic removed (｀∀´)Ψ' });
    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Topic ID not valid ⊙︿⊙" });
        }
        res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
    }
})

// @route   PUT api/topics/:id
// @desc    Update Topic by ID
// @access  Private
// TODO add middleware 'authentification'
router.put('/:id', async(req, res) => {
        const { name, emailContributor, slackContributor, status, type, priority, lockedBy } = req.body;

        let topicFields = {};

        if (name) topicFields.name = name;
        if (emailContributor) topicFields.emailContributor = emailContributor;
        if (slackContributor) topicFields.slackContributor = slackContributor;
        if (status) topicFields.status = status;
        if (type) topicFields.type = type;
        if (priority) topicFields.priority = priority;
        if (lockedBy) topicFields.lockedBy = lockedBy;

        // TODO check user
        // ...

        try {
            let topic = await Topic.findById(req.params.id);

            if (topic) {
                // Update
                topic = await Topic.findOneAndUpdate(
                    { id: req.params.id},
                    { $set: topicFields},
                    { new: true });
                return res.json(topic);
            }
        } catch (err) {
            console.error(err.message);

            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: "Topic ID not valid ⊙︿⊙" });
            }
            res.status(500).send('Oopsie doopsie, Server Error ! (◕_◕)');
        }
    }
)

module.exports = router;