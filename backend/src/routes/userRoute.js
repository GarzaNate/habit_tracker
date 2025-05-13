import express from 'express';
import { getAllUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(authMiddleware);

// Get a single user by id
router.get('/:id', getUser);
// Get all users
router.get('/', getAllUsers);
// Update a user
router.put('/:id', updateUser);
// Delete a user
router.delete('/:id', deleteUser);

export default router;