require('dotenv').config()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const obraData = new(require('./ObraData'))
const stockData = new(require('./StockData'))

if (false)
obraData.createObra('Pedro', new Date(), 'AV. Piedra 33', false)
    .then(obra => {
        return stockData.createProduct('Accesorios', new Date(), 10, 'unidad', 'marca', 'descripcion', 'refProveedor', 10, 'proveedor', 10)
            .then(producto => {
                console.log('producto -> ', JSON.stringify(producto))

                return stockData.category('Accesorios')
                    .then(productos => {
                        const stockSelected = productos.map(producto => ({ _id: producto._id, stockQuantity: 10 }))

                        return obraData.updateObraProducts(obra.id, stockSelected)
                            .then(updatedObra => {
                                console.log('obra -> ', JSON.stringify(updatedObra))

                                return obraData.deleteObra(obra._id)
                                    .then(() => {
                                        const productDeletes = productos.map(producto => stockData.deleteProduct(producto.categoria, producto._id))

                                        return Promise.all(productDeletes)
                                    })
                            })
                    })
            })
    })
    .then(process.exit)
    .catch(console.error)


obraData.createObra('Pedro', new Date(), 'AV. Piedra 33', false)
    .then(obra => {
        return stockData.createProduct('Accesorios', new Date(), 10, 'unidad', 'marca', 'descripcion', 'refProveedor', 10, 'proveedor', 10)
            .then(producto => {
                console.log('producto -> ', JSON.stringify(producto))

                return stockData.category('Accesorios')
                    .then(productos => {
                        const stockSelected = productos.map(producto => ({ _id: producto._id, stockQuantity: 10 }))

                        return obraData.updateObraProducts(obra.id, stockSelected)
                            .then(updatedObra => {
                                console.log('obra -> ', JSON.stringify(updatedObra))

                                return obraData.retrieveByName(updatedObra.nombre)
                                    .then(retrivedObra => {
                                        console.log('retrivedObra -> ', JSON.stringify(retrivedObra))

                                        return obraData.deleteObra(obra._id)
                                            .then(() => {
                                                const productDeletes = productos.map(producto => stockData.deleteProduct(producto.categoria, producto._id))

                                                return Promise.all(productDeletes)
                                            })
                                    })
                            })
                    })
            })
    })
    .then(process.exit)
    .catch(console.error)