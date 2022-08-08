const { Router } = require('express')

const userController = require('../Controllers/UserController')
const sessionController = require('../Controllers/Login')
const productController = require('../Controllers/ProductController')
const cartController = require('../Controllers/CartController')

const { authenticate } = require('../Middlewares')

const routes = Router()

routes.get('/',(req, res) => {
    res.send('Olá Mundo!!!')
})

routes.post('/users', userController.createUser)
routes.get('/users', userController.getUsers)

routes.get('/users/:user_id',  userController.getUserById)

routes.post('/session', sessionController.createSession)

routes.post('/products/:user_id', authenticate, productController.createProduct)
routes.get('/products/:user_id', productController.getUserProduct)
routes.patch('/products/:user_id/:product_id', authenticate,  productController.updateProduct)

routes.delete('/products/:user_id/:product_id', authenticate,  productController.deleteProduct)

routes.get('/products', productController.getProducts)
routes.get('/products/:product_id', productController.getProductById)

routes.post('/cart/:user_id', authenticate,  cartController.createCart)
routes.get('/cart/:user_id', authenticate,  cartController.getUserCart)

routes.get('/cart/:user_id/:cart_id', authenticate,  cartController.getCart)

module.exports = routes