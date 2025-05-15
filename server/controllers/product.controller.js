import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const { title, price, description, image, category } = req.body;

  if (!title || !price || !description || !image || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = await Product.create({
      title,
      price,
      description,
      image,
      category,
    });

    res.json(product);
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

export const getProductByName = async (req, res) => {
  const title = req.query.q;

  const products = await Product.find();

  if (!products) {
    return res.status(404).json({ message: "Product not found" });
  }

  const searchPrefix = products.filter((p) =>
    p.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  );

  res.json(searchPrefix);
};
