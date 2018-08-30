const express = require('express');
const app = express();
app.use(require('body-parser').json());
app.use(express.static(__dirname + "./../dist/"));

let db;
const mongodb = require('mongodb');
const bcrypt = require('bcrypt-nodejs');
const ObjectId = mongodb.ObjectID;
const matchesColl = "matches";

mongodb.MongoClient.connect(process.env.MONGODB_URI || require('./secrets.json').connectionString, (err, client) => {
  if (err) return console.log(err);
  console.log('successfully connected to db');
  db = client.db('heroku_320q6nfk');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`listen on ${PORT}`));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../dist/index.html'));
});

app.get(`/api/${matchesColl}`, (req, res) => {
  db.collection(matchesColl).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get matches.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post(`/api/${matchesColl}`, (req, res) => {
  db.collection(matchesColl).insertOne(req.body, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to create new match.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get(`/api/${matchesColl}/:id`, (req, res) => {
  db.collection(matchesColl).findOne({ _id: ObjectId(req.params.id) }, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to get match");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put(`/api/${matchesColl}/:id`, (req, res) => {
  db.collection(matchesColl).updateOne({ _id: ObjectId(req.params.id) }, { $set: cloneWithoutId(req.body) }, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to update match");
    } else {
      res.status(200).json(req.body);
    }
  });
});

app.delete(`/api/${matchesColl}/:id`, (req, res) => {
  db.collection(matchesColl).deleteOne({ _id: ObjectId(req.params.id) }, (err, result) => {
    if (err) {
      handleError(res, err.message, "Failed to delete match");
    } else {
      res.status(204).json({});
    }
  });
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

function cloneWithoutId(item) {
  const cloned = Object.assign({}, item);
  delete cloned._id;
  return cloned;
}


const mongoose = require('mongoose');
const User = require('./user');
mongoose.connect(process.env.MONGODB_URI || require('./secrets.json').connectionString, (err) => {
  if (err) return console.log(err);
  console.log('connected via mongoose');
});
const usersUrl = "/api/users";
app.post(usersUrl, (req, res) => {
  const user = new User(req.body);
  user.save((err, result) => {
    res.location(`${usersUrl}/${result._id}`);
    res.status(201).json(result);
  })
});

app.get(usersUrl, async (req, res) => {
  const users = await User.find({}, '-password -__v');
  res.send(users);
});

app.get(`${usersUrl}/:id`, async (req, res) => {
  const user = await User.findById(req.params.id, '-password -__v');
  res.send(user);
});

const jwt = require('jwt-simple');
const Session = require('./session');
app.post("/api/sessions", async (req, res) => {
  const loginData = new User(req.body);
  const existingUser = await User.findOne({ email: loginData.email });
  if (!existingUser) return res.status(401).json({});
  bcrypt.compare(loginData.password, existingUser.password, (_err, isMatch) => {
    if (!isMatch) return res.status(401).json({});
    const payload = {};
    const token = jwt.encode(payload, '123');//todo: get secret from configuration file
    const session = new Session(token);
    res.status(200).send(session);
  });
});
