var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dogOps = require('./dogoperations');

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("animalsdb");
  
  dogOps.InsertDog(dbo, "Brown", "Chihuahua", 12);
  
  db.close();
});