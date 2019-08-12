const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mongo:mongo@cluster0-d8h1h.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

module.exports = mongoose