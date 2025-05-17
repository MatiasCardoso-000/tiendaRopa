import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const { title, price, description, image, category } = req.body;

  if (!title || !price || !description || !image || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newProduct = await Product.create({
      title,
      price,
      description,
      image,
      category,
    });

    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  try {
    if (products.length === 0) return res.json([]);

    return res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const productFound = await Product.findById(id);

  res.json(productFound);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, image, price, description } = req.body;

  try {
    const productFound = await Product.findById(id);

    const product = {
      title,
      image,
      price,
      description,
    };

    const updatedProduct = await productFound.updateOne(product);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ messge: error.message });
  }
};
