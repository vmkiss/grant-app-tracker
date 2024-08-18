import express from 'express';
import { createGrant, retrieveAll, retrieveById, editById, deleteGrant } from './grants-controller.mjs';
import requireAuth from './requireAuth.mjs';

const grantRoutes = express.Router()

// Verify that user is authenticated before giving access to grant routes
grantRoutes.use(requireAuth)

// Create grant route
grantRoutes.post('/create', createGrant)

// Retrieve all grants route
grantRoutes.get('/all', retrieveAll)

// Retrieve grant by id route
grantRoutes.get('/get/:_id', retrieveById)

// Edit grant by id route
grantRoutes.put('/edit/:_id', editById)

// Delete grant route
grantRoutes.delete('/delete/:_id', deleteGrant)

export { grantRoutes }