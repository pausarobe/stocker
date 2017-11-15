require('dotenv').config()

const express = require('express')
const app = express()
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

// router.route('stocks/:category')
//     .get((req, res) => {
//         //lista un stock concreto
//         const stock = req.params.stock


//     })
//     .post((req, res) => {
//         //crear nuevo producto del stock concreto
//     })
//     .put((req, res) => {
//         //edita un producto en concreto
//     })
//     .delete((req, res) => {
//         //elimina un producto en concreto
//     })

// router.route('/obras')
//     .get((req, res) => {
//         //lista todas las obras
//         res.json({
//             status: 'OK',
//             messsage: 'Obras listed successfully'
//             //data: obrasData.list()
//         })
//     })
//     .post((req, res) => {
//         //crear una obra nueva
//     })
//     .delete((req, res) => {
//         //elimina una obra 
//     })

// router.route('/obras/:id')
//     .get((req, res) => {
//         //lista una obra en concreto
//         const id = req.params.id
//     })

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

console.log('Starting API...')

app.listen(process.env.PORT, () => console.log(`API is up on port ${process.env.PORT}`))

process.on('SIGINT', () => {
    console.log('\nStopping API.')

    process.exit()
})