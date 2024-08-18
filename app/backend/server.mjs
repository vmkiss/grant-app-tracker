// Controllers for Grants Collection

import 'dotenv/config';
import express from 'express';
import * as grants from './grants-model.mjs';
import { grantRoutes } from './grant-routes.mjs';
import { userRoutes } from './user-routes.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use('/user', userRoutes)
app.use('/grants', grantRoutes)

/*
// Update grant controller
app.put('/grants/:_id', (req, res) => {
    grants.updateGrant(
        req.params._id,
        req.body.foundation,
        req.body.notes,
        req.body.date,
        req.body.ask,
        req.body.award,
        req.body.currStatus
    )
        .then(grant => {
            console.log(`${grant.foundation} grant successfully updated`);
            res.json(grant);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Grant could not be updated' });
        });
});

// Delete grant controller
app.delete('/grants/:_id', (req, res) => {
    grants.deleteGrantByID(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} grant was deleted.`);
                res.status(200).send({ Success: `${deletedCount} grant was deleted based on its ID` });
            } else {
                res.status(404).json({ Error: 'Grant could not be deleted' })
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Grant could not be deleted based on ID' });
        });
});
*/

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
