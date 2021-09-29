const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   emailContributor: {
      type: String,
      required: true
   },
   slackContributor: {
      type: String
   },
   status: {
      type: String,
      default: 'suggested'
   },
   type: {
      type: String,
      required: true
   },
   creationDate: {
      type: Date,
      default: Date.now
   },
   priority: {
      type: Boolean,
      default: false
   },
   lockedBy: {
      type: String
   }
});

module.exports = Topic = mongoose.model('topic', TopicSchema);