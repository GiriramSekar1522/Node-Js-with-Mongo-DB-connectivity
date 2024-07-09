const productModel = require('../models/productModel');

//Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
    
    const products = await productModel.find({});

    res.status(200).json({
        success: true,
        products
    })
}

//Get Single Product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.status(200).json({
            success: true,
            product
        })
    } catch(error) {
        res.status(404).json({
            success: false,
            message: "Unable to get the Product with the request ID"
        })
    }
}