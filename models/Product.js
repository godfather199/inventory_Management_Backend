const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    proImage: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})


module.exports = model('Product', ProductSchema)