import jsonwebtoken from 'jsonwebtoken'
import User from './user-model.mjs'

const requireAuth = async (req, res, next) => {
    // Verfify user authentification
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    // Verify that token has not been tampered with
    try {
        const {_id} = jsonwebtoken.verify(token, process.env.SECRET)
        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})

    }
}

export default { requireAuth }