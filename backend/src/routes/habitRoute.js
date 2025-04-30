import express from 'express';
import { createHabit, getHabits, getHabit } from '../controllers/habitController.js';

const router = express.Router();

// Create a new habit
router.post('/habit', createHabit);

// Get all habits from logged in user
router.get('/', getHabits);

// Get a single habit by id
router.get('/:id', getHabit);

export default router;
// This code defines the routes for the habit-related API endpoints.
