const express = require("express");
const productRouter = require("./routes/product");
const connectDB = require("./db/db");
const bodyParser = require("body-parser");

const app = express();

//PORT
const PORT = 5578;

//middlewares

app.use(bodyParser.json());

//Routes

app.use("/api/products", productRouter);

//Database Connection

connectDB();

//Connecting to the port;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
