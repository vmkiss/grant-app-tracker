import User from './user-model.mjs'
import {jsonwebtoken as jwt} from 'jsonwebtoken'


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}

// login user
const loginUser = async (req, res) => {
    res.json({ Message: 'Login user' })
}

// sign up user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)

        res.status(200).json( {email, user} )
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

export { signupUser, loginUser }