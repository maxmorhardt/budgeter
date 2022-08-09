const express = require("express")
const app = express()
const port = 5000

app.get('/api', (req, res) => {
  res.send({ express: 'Hello From Express' })
})

app.listen(port)