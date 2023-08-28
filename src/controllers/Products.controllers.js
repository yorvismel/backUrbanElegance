const { Products } = require('../db'); 

const createProduct = async (req, res) => {
  try {
    const { title, price, description, image, rating, category } = req.body;
    const newProduct = await Products.create({
      title,
      price,
      description,
      image,
      rating,
      category,
    });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating product' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error getting products' });
  }
};

const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const productToDelete = await Products.findByPk(id);
  
      if (!productToDelete) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      await productToDelete.destroy();
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting product' });
    }
  };


  const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, price, description, image, rating, category } = req.body;
  
      const productToUpdate = await Products.findByPk(id);
  
      if (!productToUpdate) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
    
      productToUpdate.title = title;
      productToUpdate.price = price;
      productToUpdate.description = description;
      productToUpdate.image = image;
      productToUpdate.rating = rating;
      productToUpdate.category = category;
  
      await productToUpdate.save();
  
      return res.status(200).json(productToUpdate);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating product' });
    }
  };
  
module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct
};
