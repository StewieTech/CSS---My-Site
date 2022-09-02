const {MongoClient} = require("mongodb");
 
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";
 
const client = new MongoClient(uri, {useUnifiedTopology: true});
 
async function run() {
    try {
        await client.connect();
        console.log("Connected Successfully to server");
 
        const database = client.db('fruitsDB');
        const fruitsCollection = database.collection('fruits');
        
        const cursor = fruitsCollection.find({});
 
        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
        }
 
        await cursor.forEach((fruit) => {
            console.log(fruit);
        });
 
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
 
run().catch(console.dir);