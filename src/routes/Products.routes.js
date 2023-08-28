const express = require('express');
const router = express.Router();
const {createProduct, getAllProducts, deleteProduct, updateProduct} = require('../controllers/Products.controllers'); // Ajusta la ruta según tu estructura de archivos

// Ruta para crear un nuevo producto
router.post('/', createProduct);

router.get('/', getAllProducts);
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

module.exports = router;
