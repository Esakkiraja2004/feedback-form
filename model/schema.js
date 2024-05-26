const mongoose = require('mongoose');


// Define the schema
    const feedbackSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        experience: {
            type: String,
            required: true
        },
        comments: String
    });

    // Create a model based on the schema
    const Feedback = new mongoose.model('Feedback', feedbackSchema);

    module.exports = Feedback;
