// Models for Grants collection

import mongoose from 'mongoose';
import 'dotenv/config';

// Establish database connection
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm database connection
db.once("open", (err) => {
    if (err) {
        res.status(500).json({Error: 'Connection to database failed'});   
    } else {
        console.log('Success: Successfully connected to database');
    }
});

// Define grant collection's schema
const grantSchema = mongoose.Schema({
    foundation: { type: String, required: true },
    notes: { type: String, required: true },
    date: { type: Date, required: true },
    ask: { type: String, required: true },
    award: { type: String, required: true },
    currStatus: { type: String, required: true }
});

// Define Grants model and compile from schema
const grants = mongoose.model('Grants', grantSchema);

// Create model
const createGrant = async (foundation, notes, date, ask, award, currStatus) => {
    const grant = new grants({
        foundation: foundation,
        notes: notes,
        date: date,
        ask: ask,
        award: award,
        currStatus: currStatus
    });
    return grant.save();
}

// Retrieve model

// Retrieve all grants
const retrieveGrants = async () => {
    const query = grants.find();
    return query.exec();
}

// Retrieve grant by id
const retrieveGrantByID = async (_id) => {
    const query = moives.findById({_id: _id});
    return query.exec();
}

// Delete model by id
const deleteGrantById = async (_id) => {
    const result = await grants.deleteOne({_id: _id});
    return result.deletedCount;
};

// Edit model
const updateGrant = async (_id, foundation, notes, date, ask, award, currStatus) => {
    const result = await grants.replaceOne({_id: _id}, {
        foundation: foundation,
        notes: notes,
        date: date,
        ask: ask,
        award: award,
        currStatus: currStatus
    });
    return {
        _id: _id,
        foundation: foundation,
        notes: notes,
        date: date,
        ask: ask,
        award: award,
        currStatus: currStatus
    }
}

export { createGrant, retrieveGrants, retrieveGrantByID, updateGrant, deleteGrantById }






