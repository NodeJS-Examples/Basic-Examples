var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //Create new DBobject
  var dbo = db.db("mydb");
  //Create collection for dogs
  dbo.createCollection("dogs", function(err, res) {
    if (err) throw err;
    console.log("Dogs collection created!");
    db.close();
  });
});