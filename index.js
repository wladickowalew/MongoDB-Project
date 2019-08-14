let mC = require("mongodb").MongoClient,
	url = "mongodb://localhost";

mC.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, 
function (err, client) {
	if(err) console.log(err.stack);
	let db = client.db('democracy');
	db.collection("humans").findOne({}, function (findErr, result){
    	if (findErr) throw findErr;
    	console.log(result.name);
    	closelient.close();
  });
}); 
//	db.insert({name: "John", age: 18}, function (err, res){
//		if(err) console.log(err.stack);
//		console.log(res);
//	});
