const MongoClient = require("mongodb").MongoClient;

let db;

const connectDB = async () => {
  try {
    const conn = await MongoClient.connect("mongodb://127.0.0.1:27017/");
    db = conn.db("ecomapi");
    let user = db.collection("products");
    console.log(`MongoDB connected`);
    return user;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
