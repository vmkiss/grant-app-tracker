import * as grants from './grants-model.mjs';

// Create grant controller
const createGrant = (req, res) => {
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
}

// Retrieve all grants controller
const retrieveAll = (req, res) => {
    grants.retrieveGrants()
        .then(grants => {
            if (grants !== null) {
                console.log('All grants successfully retrieved')
                res.json(grants);
            } else {
                res.status(404).json({ Error: 'No grants found' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Grants could not be retrieved' });
        });
}

export { createGrant, retrieveAll }