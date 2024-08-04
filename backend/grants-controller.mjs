// Controllers for Grants Collection

import 'dotenv/config';
import express from 'express';
import * as grants from './grants-model.mjs';

const PORT = process.env.PORT;
const app = expres();
app.use(express.json());

// Create grant controller
app.post ('./grants', (req, res) => {
    grants.createGrant(
        req.body.foundation,
        req.body.notes,
        req.body.date,
        req.body.ask,
        req.body.award,
        req.body.currStatus
    )
    .then(grant => {
        console.log(`${grant.foundation} grant was added to the collection.`)
        res.status(201).json(grant);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Grant could not be added to collection'});
    });
})

// Retrieve grant controller
app.get('./grants', (req, res) => {
    grants.retrieveGrants()
        .then(grants => {
            if (grants !== null) {
                console.log('All grants successfully retrieved')
            } else {
                res.status(404).json({ Error: 'No grants found' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Grants could not be retrieved' });
        });
});

// Retrieve grant controller by id
app.get('./grants/:_id', (req, res) => {
    grants.retrieveGrantByID(req.params._id)
        .then(grant => {
            if (grant != null) {
                console.log(`${grant.foundation} grant was retrieve by its ID`)
                res.json(grant);
            } else {
                res.status(404).json({ Error: 'No grants found'})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Grant could not be retrieved by its ID' });
        });
});

// Update grant controller
app.put('./grants/:_id', (req, res) => {
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
