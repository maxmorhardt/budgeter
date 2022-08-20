const mongoose = require('mongoose')
const Schema = mongoose.Schema

var postSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId, ref: 'User',
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
})

const User = mongoose.model('Post', postSchema)
module.exports = User