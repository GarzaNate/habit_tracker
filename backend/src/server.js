import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import habitRoute from './routes/habitRoute.js';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors(
    {
        origin: process.env.CLIENT_URL || 'http://localhost:3000',
        credentials: true
    }
));

// Routes
app.use('/api/habits', habitRoute);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

// Database connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
});
