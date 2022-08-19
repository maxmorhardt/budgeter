const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const router = express.Router()

// Logs in a user using bcrypt and responds with token
router.post('/login', async (req, res) => {
  const body = req.body
  User.findOne({ email: body.email })
    .then(user => {
      if (!user) {
        res.status(400).json({ message: 'User not found' })
      } else {
        bcrypt.compare(body.password, user.password)
          .then(isMatch => {
            if (isMatch) {
              res.status(200).json({ 
                message: 'Log in successful',
                token: generateToken(user), 
              })
            } else {
              res.status(400).json({ message: 'Incorrect password' })
            }
          })
          .catch(err => res.status(400).json(err))
      }
    }).catch(err => res.status(400).json(err))
})

// Registers a user using bcrypt and responds with token
router.post('/signup', async (req, res) => {
  const body = req.body
  User.findOne({ email: body.email })
    .then(user => {
      if (user) {
        res.status(400).json({ message: 'User already exists' })
      } else {
        bcrypt.hash(body.password, 10)
          .then(hash => {
            const newUser = new User({
              email: body.email,
              password: hash
            })
            newUser.save()
              .then(user => {res.status(200).json(
                { message: 'User created', 
                  token: generateToken(user)
               })
              }).catch(err => res.status(400).json(err))
          }).catch(err => res.status(400).json(err))
      }
    })
  })
  
  // Checks to see if a token is expired
  router.get('/validate-token', async (req, res) => {
    const token = req.headers.authorization
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Token is not valid' })
      } else {
        res.status(200).json({ message: 'Token valid' })
      }
    })
  })

  // Generates a token for a user
  function generateToken(user) {
    return jwt.sign({ user }, process.env.TOKEN_SECRET, { expiresIn: '1w' })
  }

module.exports = router;