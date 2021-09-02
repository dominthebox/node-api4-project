require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const { logger } = require('./middleware/middleware')
const server = express()
const usersRouter = require('./users/users-router')
const registerRouter = require('./users/register-router')
const loginRouter = require('./users/login-router')

console.log(process.env.DOM)
console.log(process.env.API_SECRET)

server.use(express.json())
server.use(cors())
server.use(logger)
server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/api', (req, res) => {
    res.json({ message: 'Doms One Server to RULE them ALL!'})
})

server.use('/api/users', usersRouter)
server.use('/api/register', registerRouter)
server.use('/api/login', loginRouter)

module.exports = server