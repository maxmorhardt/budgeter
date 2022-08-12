const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.get('/log-in', (req, res) => {
  const body = req.body
  const { email, password } = body
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.status(400).json({ message: 'User not found' })
      } else {
        bcrypt.compare(password, user.password)
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
        return res.status(400).json({
          message: 'Email already exists'
        })
      }
    }).catch(err => res.status(400).json(err))
  const newUser = new User(body)
  hashedPassword = bcrypt.hash(newUser.password, 10)
    .then(hashedPassword => {
      newUser.password = hashedPassword
      return newUser.save()
    }).then(user => {
      res.status(200).json({ message: 'Sign up successful' })
    }).catch(err => res.status(400).json(err))})

module.exports = router