const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 6000

app.use(bodyParser())
app.use(cors())

const { productRouter, productcatRouter, categoryRouter } = require('./router')

app.use('/products', productRouter)
app.use('/productcat', productcatRouter)
app.use('/categories', categoryRouter)


app.listen(PORT, () => { console.log(PORT) })