var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


MongoClient.connect(url, { poolSize: 10 }, function(err, client) {
    if (err) throw err;
    var db = client.db("animalsdb");
    var dogCollection = db.collection("dogs");
    
    var fatDogsQuery = {
        weight: { $gt: 20 }
    };
    
    var skinnyDogsQuery = {
        weight: { $lt : 20}
    };
    
    var whiteDogQuery = {
        color: 'White'
    };
    
    //Dogs greater than 20 pounds:
    dogCollection.find(fatDogsQuery).toArray(function(err, result){
       if(err) throw err;
       console.log(result);
    });
    
    //Dogs less than 20 pounds:
    dogCollection.find(skinnyDogsQuery).toArray(function(err, result){
       if(err) throw err;
       console.log(result);
    });
    
    //First white dog
    dogCollection.findOne(whiteDogQuery, function(err, result){
        if(err) throw err;
       console.log(result); 
    });
});
