const express = require("express");
const app = express();
const bodyParser = require("body-parser");
    // connection to mongodb
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://siwarjelassi:<rrsm55099859>@cluster0-gyekq.mongodb.net/<dbuser>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true} );
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});
app.use(express.json())

app.use('/api/users', require('./routes/user'));

console.log("hello world")

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });



const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});