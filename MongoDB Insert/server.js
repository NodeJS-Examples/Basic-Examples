var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


MongoClient.connect(url, { poolSize: 10 }, function(err, client) {
    if (err) throw err;
    var db = client.db("animalsdb");
    var dogCollection = db.collection("dogs");
    
    var dogObj = {
        color: "Grey",
        breed: "Miniature Pincher",
        weight: 8
    };
    dogCollection.insertOne(dogObj, function(err, res) {
        if (err) throw err;
        console.log("Dog inserted");
        client.close();
        //We do should not normally close the DB and can leave it open
    });

    //Could otherwise do this:
    //Create a dogOperations var here
    //var dogOps = require('dogoperations')(dbo);
    //dogOps.InsertDog("White", "Schnauzer", 50);
});
