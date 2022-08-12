if (process.env.NODE_ENV === 'development') {
  module.exports = {
    API_PATH: 'http://localhost:5000'
  }
} else {
  module.exports = {
    API_PATH: 'https://the-budgeter.herokuapp.com'
  }
}