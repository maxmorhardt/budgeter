const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post('/log-in', (req, res) => {
  const body = req.body
  User.findOne({ email: body.email })
    .then(user => {
      if (!user) {
        res.status(400).json({ message: 'User not found' })
      } else {
        bcrypt.compare(body.password, user.password)
          .then(isMatch => {
            if (isMatch) {
              res.status(200).json({ message: 'Log in successful' })
            } else {
              res.status(400).json({ message: 'Incorrect password' })
            }
          })
          .catch(err => res.status(400).json(err))
      }
    }).catch(err => res.status(400).json(err))
})

router.post('/sign-up', (req, res) => {
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
                { message: 'User created' })
              }).catch(err => res.status(400).json(err))
          }).catch(err => res.status(400).json(err))
      }
    })
  })

module.exports = router