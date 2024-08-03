// Models for Grants collection

import mongoose from 'mongoose';
import 'dotenv/config';

// Establish database connection
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true}
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
    name: { type: String, required: true },
    notes: { type: String, required: true },
    dateDue: { type: Date, required: true },
    ask: { type: String, required: true },
    award: { type: String, required: true },
    status: { type: String, required: true }
});

