const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
    try {
        const User = User.create(req.body)
        const token = createJWT(user)
        res.locals.data.user = user
        res.locals.data.token = token
        next()
    } catch (error) {

    }
}










function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '48h' })
}