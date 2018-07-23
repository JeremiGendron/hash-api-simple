const express = require('express')
const app = express();
const fs = require('fs')
const index = fs.readFileSync('index.html')
const formatError = fs.readFileSync('formatError.html')
const html = fs.readFileSync('README.html')
const hash = require('./hash.js')

app.get('/', (req, res) => {
  res.write(index)
})
app.post('/api/:data', (req, res) => {
  let result = hash(req.params.data)
  console.log(result)
  res.end(result)
})
app.get('/README.html', (req, res) => {
  res.end(html)
})
app.listen(8080)
