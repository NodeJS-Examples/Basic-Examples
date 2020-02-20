module.exports = function(dbObj){
    var module = {};
    
    var dogCollection = dbObj.collection("dogs");
    
    module.InsertDog = function(color, breed, weight) {
        var dogObj =
        {
            color: color,
            breed: breed,
            weight: weight
        };
        dogCollection.insertOne(dogObj, function(err, res) {
            if (err) throw err;
            console.log("Dog inserted");
            });
    };
    
    module.LogAnnouncement = function() {
        console.log("Successful");
    };
    
    return module;
};