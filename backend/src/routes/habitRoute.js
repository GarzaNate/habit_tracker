import express from 'express';
import { createHabit, getHabits, getHabit, updateHabit, deleteHabit } from '../controllers/habitController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(authMiddleware);

// Create a new habit
router.post('/', createHabit);

// Update a habit
router.put('/:id', updateHabit);

// Get all habits from logged in user
router.get('/', getHabits);

// Get a single habit by id
router.get('/:id', getHabit);

// Delete a habit
router.delete('/:id', deleteHabit);

export default router;