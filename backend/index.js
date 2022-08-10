require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

mongoose.connect(process.env.MONGODB_URI)


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port)