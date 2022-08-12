const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../models/user')

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