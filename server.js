require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/users')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

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

// Cors
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true, 
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Routes
app.use('/api', userRoute)

app.listen(port, () => console.log(`Listening on port ${port}`))