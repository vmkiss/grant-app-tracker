import express from 'express';
import { createGrant, retrieveAll, retrieveById, editById } from './grants-controller.mjs';

const grantRoutes = express.Router()

// Create grant route
grantRoutes.post('/create', createGrant)

// Retrieve all grants route
grantRoutes.get('/all', retrieveAll)

// Retrieve grant by id route
grantRoutes.get('/get/:_id', retrieveById)

// Edit grant by id route
grantRoutes.put('/edit/:_id', editById)

export { grantRoutes }