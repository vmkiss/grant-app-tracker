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

// Retrieve grant by id controller
const retrieveById = (req, res) => {
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
}

// Update grant by id controller
const editById = (req, res) => {
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
}

const deleteGrant = (req, res) => {
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
}



export { createGrant, retrieveAll, retrieveById, editById, deleteGrant }