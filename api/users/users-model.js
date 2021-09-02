const shortid = require('shortid')

const initializeUsers = () => ([
    { id: shortid.generate(), username: 'Eddard Stark', password: 'winterfell'},
    { id: shortid.generate(), username: 'Catelyn Stark', password: 'winterfell'},
    { id: shortid.generate(), username: 'Jon Snow', password: 'winterfell'},
    { id: shortid.generate(), username: 'Robb Stark', password: 'winterfell'},
    { id: shortid.generate(), username: 'Sansa Stark', password: 'winterfell'},
    { id: shortid.generate(), username: 'Arya Stark', password: 'winterfell'},
    { id: shortid.generate(), username: 'Bran Stark', password: 'winterfell'}
])

let users = initializeUsers()

const get = () => {
    return Promise.resolve(users)
}

const getById = id => {
    const user = users.find(d => d.id === id)
    return Promise.resolve(user)
}

const insert = ({ username, password }) => {
    const newUser = { id: shortid.generate(), username, password }
    users.push(newUser)
    return Promise.resolve(newUser)
}

module.exports = {
    get,
    getById, 
    insert
}