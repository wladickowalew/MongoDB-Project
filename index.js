let mC = require("mongodb").MongoClient,
	url = "mongodb://localhost";

mC.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, 
function (err, client) {
	if(err) console.log(err.stack);
	var human = {name: "John", age: 18};
	let db = client.db('democracy');
	db.collection('humans').insertOne(human, function (error, response) {
	    if(error) {
	        console.log('Error occurred while inserting');
	    } else {
	       console.log('inserted record', response.ops[0]);
	    }
	});
	client.close();
});
