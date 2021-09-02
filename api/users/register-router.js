const express = require('express')
const router = express.Router()

const User = require('./users-model')

router.post('/', (req, res) => {
    const user = req.body
    if (!user.username || !user.password) {
        res.status(400).json({
            message: 'Please provide username and password for the user'
        })
    } else {
        User.insert(user)
            .then(newUser => {
                res.status(201).json(newUser)
            })
            .catch(err => {
                res.status(500).json({
                    message: 'There was an error saving the user to the database',
                    err: err.message
                })
            })
    }
})

module.exports = router