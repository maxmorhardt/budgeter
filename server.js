require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/users')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_LOCAL_URI || process.env.MONGODB_PROD_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Serves static files for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

// Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/users', userRoute)

app.listen(port, () => console.log(`Listening on port ${port}`))