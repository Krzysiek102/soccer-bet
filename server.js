const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(bodyParser.json());
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

const MATCHES_COLLECTION = "matches";
let db;

MongoClient.connect(process.env.MONGODB_URI || require('./secrets.json').connectionString, (err, client) => {
    if (err) return console.log(err);
    console.log('successfully connected to db');
    db = client.db('heroku_320q6nfk');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`listen on ${PORT}`));
});


function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

app.get(`/api/${MATCHES_COLLECTION}`, (req, res) => {
    db.collection(MATCHES_COLLECTION).find({}).toArray((err, docs) => {
        if (err) {
            handleError(res, err.message, "Failed to get matches.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post(`/api/${MATCHES_COLLECTION}`, (req, res) => {
    var newMatch = req.body;
    newMatch.createDate = new Date();
    if (!req.body.name) {
        handleError(res, "Invalid user input", "Must provide a name.", 400);
    }
    db.collection(MATCHES_COLLECTION).insertOne(newMatch, (err, doc) => {
        if (err) {
            handleError(res, err.message, "Failed to create new match.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});

app.get(`/api/${MATCHES_COLLECTION}/:id`, (req, res) => {
    db.collection(MATCHES_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, (err, doc) => {
        if (err) {
            handleError(res, err.message, "Failed to get match");
        } else {
            res.status(200).json(doc);
        }
    });
});

app.put(`/api/${MATCHES_COLLECTION}/:id`, (req, res) => {
    var updateDoc = req.body;
    delete updateDoc._id;
    db.collection(MATCHES_COLLECTION).updateOne({ _id: new ObjectID(req.params.id) }, updateDoc, (err, doc) => {
        if (err) {
            handleError(res, err.message, "Failed to update match");
        } else {
            updateDoc._id = req.params.id;
            res.status(200).json(updateDoc);
        }
    });
});

app.delete(`/api/${MATCHES_COLLECTION}/:id`, (req, res) => {
    db.collection(MATCHES_COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, (err, result) => {
        if (err) {
            handleError(res, err.message, "Failed to delete match");
        } else {
            res.status(200).json(req.params.id);
        }
    });
});
