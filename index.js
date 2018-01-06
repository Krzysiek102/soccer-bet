const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = process.env.PORT || 5000;

let db;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(process.env.MONGODB_URI || require('./secrets.json').connectionString, (err, client) => {
    if (err) return console.log(err);
    console.log('successfully connected to db');
    db = client.db('heroku_320q6nfk');
    app.listen(PORT, () => console.log(`listen on ${PORT}`));
});


app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.post('/matches', (req, res) => {
    console.log(req.body);
    db.collection('matches').save(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('match saved to database');
        res.redirect('/');
    });
});
