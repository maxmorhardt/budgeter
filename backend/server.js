require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT
const User = require('./models/models')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users', async (req, res) => {
  const users = await User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

app.listen(port, () => console.log(`Listening on port ${port}`))

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))