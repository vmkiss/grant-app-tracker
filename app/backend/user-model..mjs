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