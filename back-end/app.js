const express = require('express');

const app = express();

const mongoose = require('mongoose');

const Book = require('./models/Book');

const User = require('./models/User');


mongoose.connect('mongodb+srv://VinceDS99:neige123@cluster0.bakpevt.mongodb.net/?retryWrites=true&w=majority',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/auth/signup', (req, res, next) => {
    delete req.body._id;
    const user = new User({
        ...req.body
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Inscription réussie !'}))
        .catch(error => res.status(400).json({error}));
    });

module.exports = app;