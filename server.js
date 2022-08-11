require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/models')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_LOCAL_URI || process.env.MONGODB_PROD_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use(express.json())
app.get('/api/users', async (req, res) => {
  console.log(process.env)
  const users = await User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

app.listen(port, () => console.log(`Listening on port ${port}`))