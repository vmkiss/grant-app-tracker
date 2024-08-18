import express from 'express';
import { createGrant, retrieveAll } from './grants-controller.mjs';

const grantRoutes = express.Router()

// Create grant route
grantRoutes.post('/create', createGrant)

// Retrieve all grants route
grantRoutes.get('/all', retrieveAll)

export { grantRoutes }