// login user
const loginUser = async (req, res) => {
    res.json({ Message: 'Login user' })
}

// sign up user
const signupUser = async (req, res) => {
    res.json({ Message: 'Sign up user' })
}

module.exports = { signupUser, loginUser }