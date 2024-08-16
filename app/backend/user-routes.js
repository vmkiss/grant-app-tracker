const express = require('express')

import { signupUser } from './user-controller.mjs'
import { loginUser } from './user-controller.mjs'

const router = express.Router()

// Login route
router.post('/login', loginUser)

// Sign up route
router.post('/signup', signupUser)

module.exports = router