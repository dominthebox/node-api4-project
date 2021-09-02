const express = require('express')
const router = express.Router()

const User = require('./users-model')

router.post('/', (req, res) => {
    const user = req.body
    if (!user.username || !user.password) {
        res.status(400).json({
            message: 'Please enter a username and password'
        })
    } else {
        User.getById(user)
            .then(() => {
                res.status(200).json({
                    message: `Welcome back home ${req.body.username}`
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'There was a problem while logging in',
                    err: err.message
                })
            })
    }
})

module.exports = router