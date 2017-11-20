require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.static('public'))

console.log(`Starting web on ${process.env.PORT}`)

app.listen(process.env.PORT)