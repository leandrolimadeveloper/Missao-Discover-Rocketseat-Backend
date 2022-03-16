const express = require('express')
const route = require('./routes/route')
const path = require('path')

const server = express()

// View engine
server.set('view engine', 'ejs')

// Public
server.use(express.static('public'))
// server.use(express.static(path.join(__dirname, 'public')))

// server.set('views', path.join(__dirname, 'views'))

server.use(route)

server.listen(3000, () => console.log('Running'))
