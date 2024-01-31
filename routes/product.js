const express = require("express");
const {
  addProducts,
  getAllProducts,
  searchProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getProductsByCategory,
  getAllCategories,
} = require("../controllers/product");

const router = express.Router();

router.get("/categories", getAllCategories);
router.get("/category/:category", getProductsByCategory);
router.post("/add", addProducts);
router.get("/:id", getSingleProduct);
router.get("/", getAllProducts);
router.get("/search/:key", searchProducts);
router.patch("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
