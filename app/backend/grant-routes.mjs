import express from 'express';

import { createGrant } from './grants-controller.mjs';

const grantRoutes = express.Router()

// Create grant route
grantRoutes.post('/grants', createGrant)

export {grantRoutes}