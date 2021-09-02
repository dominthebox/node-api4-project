const express = require('express')
const router = express.Router()

const User = require('./users-model')

router.get('/', (req, res) => {
    User.get()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({
                message: 'The users could not be retrieved',
                err: err.message
            })
        })
})



module.exports = router