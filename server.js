const express = require('express')
const path = require('path')
const server = express()
server.use(express.static(path.join(__dirname, 'public')))

server.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public/home.html'))
  })
  
module.exports = server