const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add', (req, res) => {
  const username = req.body.username
  const newUser = new User({username})
})

// delete a user using express router
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
} )

// find a user by id using express router
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
} )

// update a user by id using express router
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