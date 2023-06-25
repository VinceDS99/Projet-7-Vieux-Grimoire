const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');

mongoose.connect('mongodb+srv://VinceDS99:azerty@cluster0.bakpevt.mongodb.net/?retryWrites=true&w=majority',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

app.use('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get("/", (req, res) => {
    res.send("404 URL NOT FOUND");
});

// app.post('/api/auth/signup', (req, res, next) => {
//      delete req.body._id;
//      const user = new User({
//          ...req.body
//      });
//      user.save()
//          .then(() => res.status(201).json({ message: 'Inscription réussie !'}))
//          .catch(error => res.status(400).json({error}));
//      });

// app.get('/api/books', (req, res, next) => {
//     Book.find()
//         .then(books => res.status(200).json(books))
//         .catch(error => res.status(400).json({error}))
// });

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);

module.exports = app;