const express = require('express');
//const { default: mongoose } = require('mongoose');
const app = express()
const port = 5000

// mongoose.connect("mongodb://localhost:27010/demo", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// })
// .then(() => console.log("Connected to DB"))
// .catch (console.error);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port)