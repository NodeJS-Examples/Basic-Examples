exports.InsertDog = function(dbObj, color, breed, weight) {
    var dogObj =
    {
        color: color,
        breed: breed,
        weight: weight
    };
  dbObj.collection("dogs").insertOne(dogObj, function(err, res) {
    if (err) throw err;
    console.log("Dog inserted");
  });
};