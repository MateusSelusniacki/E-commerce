const Cart = require('../../Models/Cart')


const cartController = {
    async createCart(req,res) {
        const bodyData = req.body
        const { user_id } = req.params

        try {
            const newCart = await Cart.create({ ...bodyData, userName: user_id })
            return res.status(200).json(newCart)
        } catch(err){
            return res.status(400).json(err)
        }
    },

    async getUserCart(req,res) {
        const { user_id } = req.params

        try {
            const userCarts = await Cart.find({ userName: user_id})    
            return res.status(200).json(userCarts)
        } catch(err){
            return res.status(400).json(err)
        }
    },

    async getCart(req,res) {
        const { cart_id} = req.params

        try {
            const cart = await Cart.findById(cart_id)
            return res.status(200).json(cart)
        } catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = cartController