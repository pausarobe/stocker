require('dotenv').config()

const express = require('express')
const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const stockLogic = new(require('./logic/StockLogic'))
const obrasLogic = new(require('./logic/ObrasLogic'))

const router = express.Router()

router.route('/stocks/categories')
    .get((req, res) => {

        stockLogic.listCategories()
            .then(categories => res.json({
                status: 'OK',
                message: 'Stock categories listed successfully',
                data: categories
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })

router.route('/stocks/:categoria')
    .get((req, res) => {
        const {categoria} = req.params

        stockLogic.category(categoria)
            .then(category => res.json({
                status: 'OK',
                message: `Category ${category} listed successfully`,
                data: category
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })
    .post((req, res) => {
        const {id, categoria, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio, stock, fecha} = req.body

        stockLogic.createProduct({id, categoria, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio, stock, fecha})
            .then(product => res.json({
                status: 'OK',
                message: 'New product created successfully',
                data: product
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })

router.route('/obras')
    .get((req, res) => {

        obrasLogic.listObras()
            .then(obras => res.json({
                status: 'OK',
                message: 'Obras listed successfully',
                data: obras
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })
    .post((req, res) => {
        const {id, nombre, fecha, direccion, done, productos} = req.body

        obrasLogic.createObra({id, nombre, fecha, direccion, done, productos})
            .then(newObra => res.json({
                status: 'OK',
                message: 'New obra created successfully',
                data: newObra
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })


router.route('/obras/:nombre')
    .get((req, res) => {
        const {nombre} = req.params

        obrasLogic.name(nombre)
            .then(name => res.json({
                status: 'OK',
                message: `Obra de ${name} listed successfully`,
                data: name
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })

app.use('/api', router)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

console.log('Starting API...')

app.listen(process.env.PORT, () => console.log(`API is up on port ${process.env.PORT}`))

process.on('SIGINT', () => {
    console.log('\nStopping API.')

    process.exit()
})