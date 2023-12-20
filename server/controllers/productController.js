import Product from "../models/productModel.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get single product

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const singleProduct = await Product.findById(id);
    res.json(200).json(singleProduct);
  } catch (error) {
    res.status(404).json({ message: "No product found" });
  }
};

//create product

const createProduct = async (req, res) => {
  try {
    const image = req.file ? req.file?.filename : "";
    const { name, cost, salesPrice, quantity } = req.body;
    const product = new Product({ name, cost, salesPrice, quantity, image });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.body;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product is updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Delete products
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product is deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
