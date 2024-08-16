import express from 'express';

import { signupUser } from './user-controller.mjs'
import { loginUser } from './user-controller.mjs'

const userRoutes = express.Router()

// Login route
userRoutes.post('/login', loginUser)

// Sign up route
userRoutes.post('/signup', signupUser)

export { userRoutes }