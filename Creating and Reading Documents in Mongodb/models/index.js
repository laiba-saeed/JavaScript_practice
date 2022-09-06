// Import mongodb
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

async function connection() {
    const url =
      "mongodb+srv://admin:4Mq3JJ4OCLfS0Aoc@cluster0.okzksok.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    try{
      const connectionObj = await client.connect();
      console.log(connectionObj);
      return connectionObj.db("first_db");
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = connection;