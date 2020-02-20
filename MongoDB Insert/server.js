var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, { useUnifiedTopology: true, poolSize: 10 }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("animalsdb");
    
    //Create a dogOperations var here
    var dogOps = require('./dogoperations')(dbo);
    dogOps.InsertDog("White", "Schnauzer", 50);
    //We do not close the DB, since that would kill the connection before the asynchronous insertOne happens.
});
