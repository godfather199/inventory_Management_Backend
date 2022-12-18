const router = require('express').Router()
const Product = require('../models/Product')


//CREATE PRODUCT
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        const saveProduct = await newProduct.save()

        res.status(200).json(saveProduct)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//UPDATE PRODUCT
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        )

        res.status(200).json(updatedProduct)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//DELETE PRODUCT
router.delete('/:id', async (req, res) => {
    console.log('Request received')
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted')
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//GET PRODUCT
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//GET SINGLE PRODUCT
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        res.status(200).json(product)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router