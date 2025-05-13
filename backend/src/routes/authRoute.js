import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);
// Login a user
router.post('/login', loginUser);
// Logout a user
router.post('/logout', (req, res) => {
    res.status(200).json({ message: "User logged out successfully" });
});
// Forgot password
// router.post('/forgot-password', (req, res) => {
//     res.status(200).json({ message: "Password reset link sent to email" });
// });

export default router;