// DAL - Data Abstraction Layer

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
let db = null;

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected successfully to db server");

  // connect to myproject database
  db = client.db("myproject");
});

// create user account
function create(name, email, password) {
  return new Promise((resolve, reject) => {
    //   a collection of users
    const collection = db.collection("users");
    const doc = { name, email, password, balance: 0 };
    // to insert one document
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      // reject and resolve to return the content from the database to the calling frunction from express application
      err ? reject(err) : resolve(doc);
    });
  });
}

// to return all users from database
function all() {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({})
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

// to export the functions above
module.exports = { create, all };
