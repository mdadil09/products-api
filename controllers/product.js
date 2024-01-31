const connectDB = require("../db/db");
const ObjectId = require("mongodb").ObjectId;

const addProducts = async (req, res) => {
  try {
    let data = await connectDB();
    let result = await data.insertMany(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    let data = await connectDB();
    let result = await data.find().toArray();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    let data = await connectDB();
    const productId = parseInt(req.params.id);
    let result = await data.findOne({
      id: productId,
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const searchProducts = async (req, res) => {
  try {
    let data = await connectDB();
    let searchKey = req.params.key;
    let result = await data
      .find({
        $or: [
          { title: { $regex: searchKey, $options: "i" } },
          { brand: { $regex: searchKey, $options: "i" } },
        ],
      })
      .toArray();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const data = await connectDB();
    const productId = req.params.id;
    const result = await data.findOneAndUpdate(
      { _id: new ObjectId(productId) },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
        },
      },
      { returnDocument: "after" }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const data = await connectDB();
    const productId = req.params.id;
    let result = await data.deleteOne({
      _id: new ObjectId(productId),
    });
    res.send("product is deleted");
  } catch (error) {
    console.log(error);
  }
};

const getAllCategories = async (req, res) => {
  try {
    let data = await connectDB();
    let result = await data.distinct("category");
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    let data = await connectDB();
    let productCategory = req.params.category;
    let result = await data.find({ category: productCategory }).toArray();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addProducts,
  getAllProducts,
  getAllCategories,
  searchProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getProductsByCategory,
};
