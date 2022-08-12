const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../models/user')

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
  if (!body.email || !body.password) {
    return res.status(400).json({
      error: 'You must provide an email and password'
    })
  }
  if (body.password.length < 6) {
    console.log("Here")
    return res.status(400).json({
      error: 'Password must be at least 6 characters long'
    })
  }
  User.findOne({ email: body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({
          error: 'Email already exists'
        })
      }
    })
    .catch(err => res.status(400).json(err))
  const newUser = new User(body)
  hashedPassword = bcrypt.hash(newUser.password, 10)
    .then(hashedPassword => {
      newUser.password = hashedPassword
      return newUser.save()
    }).then(user => {
      res.status(200).json(user)
    }).catch(err => res.status(400).json(err))})

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
} )

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
} )

router.post('/update/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username
      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
} )

module.exports = router