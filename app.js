const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const Feedback = require('./model/schema.js'); // Adjust the import

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/travelSite';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(mongoURI, options)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

app.get('/feedback', (req, res) => {
    res.render('feedBack');
});

app.post('/feedback', async (req, res) => {
    const { username, email, experience,comments } = req.body;
    const feedback = new Feedback({ // Correct instantiation of the model
        username: username, 
        email: email,
        experience: experience,
        comments : comments    
    });

    await feedback.save();
    res.redirect('/feedback');
    console.log(username, email, experience);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
