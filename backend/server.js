require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/models')
const path = require('path')

const app = express()
app.use(express.json())
const port = process.env.PORT

console.log(process.env)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')))
  mongoose.connect(process.env.MONGODB_PROD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))
} else {
  mongoose.connect(process.env.MONGODB_DEV_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))
}

app.get('/api/users', async (req, res) => {
  const users = await User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

app.listen(port, () => console.log(`Listening on port ${port}`))