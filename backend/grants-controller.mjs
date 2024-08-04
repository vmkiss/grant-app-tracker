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
        console.log(`${grant.foundation} was added to the collection.`)
        res.status(201).json(grant);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Grant could not be added to collection'});
    });
})