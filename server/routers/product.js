const express = require('express');
const router = express.Router();
const productModel = require('../models/products');

router.post('/', async(req , res )=>{
    const { name, price, description } = req.body;
    try{
        const newProduct = new productModel({
            name,
            price,
            description
        })
        await newProduct.save();
        res.json(newProduct);
    }catch(err){
        return res.status(500).json({ message: err.message});
    }
})

router.get('/', async(req, res)=>{
    try{
        const products = await productModel.find({});
        res.json(products);
    }catch(err){
        return res.status(500).json({ message: err.message});
    }
})


module.exports = router;