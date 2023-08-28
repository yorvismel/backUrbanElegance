const { Router } = require("express");



const productsRoutes = require('./Products.routes')

const router = Router();

router.use('/products', productsRoutes )

module.exports = router;
