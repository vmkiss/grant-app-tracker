import mongoose from 'mongoose';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import validator from 'validator';


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

// Define user schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create static sign up method
userSchema.statics.signup = async function(email, password) {

    // Validation
    if (!email || !password) {
        throw Error('All fields must be completed')
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid email')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password too weak')
    }

    // Check if user's email is unique - raise error if not
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error('Email already in use')
    }

    // Hash user's password with bcrypt
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // Store user's email and password in database
    const user = await this.create({ email, password: hash })
    
    return user
}


// Define Users model and compile from schema
const User = mongoose.model('User', userSchema);
export default User