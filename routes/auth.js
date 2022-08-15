const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post('/log-in', (req, res) => {
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

router.post('/sign-up', (req, res) => {
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

  router.get('/validate-token', (req, res) => {
    const token = req.headers.authorization
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    const isExpired = decoded.exp < Date.now() / 1000
    return res.status(200).json({ 'isExpired': isExpired })
  })

  function generateToken(user) {
    return jwt.sign({ user }, process.env.TOKEN_SECRET, { expiresIn: '1h' })
  }

module.exports = router;