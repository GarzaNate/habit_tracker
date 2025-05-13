import express from 'express';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(authMiddleware);

// Get a single user by id
router.get('/user/:id', getUser);
// Get all users
router.get('/users', getUsers);
// Update a user
router.put('/user/:id', updateUser);
// Delete a user
router.delete('/user/:id', deleteUser);

export default router;