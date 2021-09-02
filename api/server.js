require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()

console.log(process.env.DOM)
console.log(process.env.API_SECRET)

server.use(express.json())

server.get('/api', (req, res) => {
    res.json({ message: 'Doms One Server to RULE them ALL!'})
})

module.exports = server