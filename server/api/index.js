require('dotenv').config()

const express = require('express')
const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const stockLogic = new(require('./logic/StockLogic'))
const obrasLogic = new(require('./logic/ObrasLogic'))

const router = express.Router()

router.route('/stocks')
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
        const {categoria} = req.params
        const {fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio} = req.body

        stockLogic.createProduct({categoria, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio})
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

router.route('/stocks/:categoria/:_id')
    .put((req, res) => {
        const {categoria, _id} = req.params
        const {fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio} = req.body

        stockLogic.editProduct(categoria, _id, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio)
            .then(product => res.json({
                status: 'OK',
                message: 'Product edited successfully',
                data: product
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })
    .delete((req, res) => {
        const {categoria, _id} = req.params

        stockLogic.deleteProduct({categoria, _id})
            .then(product => res.json({
                status: 'OK',
                message: 'Product deleted successfully',
                data: product
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })

router.route('/update/obras/:idObra')
    .put((req, res) => {
        const { idObra } = req.params
        const { stockSelected } = req.body

        obrasLogic.updateObraProducts({idObra, stockSelected})
            .then(obras => res.json({
                status: 'OK',
                message: 'Added new products successfully',
                data: obras
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
        const {nombre, fecha, direccion, done, productos} = req.body

        obrasLogic.createObra({nombre, fecha, direccion, done, productos})
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

router.route('/obras/:_id')
    .patch((req, res) => {
        const {_id} = req.params
        const {done} = req.body

        obrasLogic.done(_id, done)
            .then(done => res.json({
                status: 'OK',
                message: 'Done successfully',
                data: done
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })
    .put((req, res) => {
        const {_id} = req.params
        const {nombre, fecha, direccion} = req.body

        obrasLogic.edit({_id}, nombre, fecha, direccion)
            .then(edit => res.json({
                status: 'OK',
                message: 'Edited successfully',
                data: edit
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })
    .delete((req, res) => {
        const {_id} = req.params

        obrasLogic.deleteObra({_id})
            .then(obra => res.json({
                status: 'OK',
                message: 'Obra deleted successfully',
                data: obra
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