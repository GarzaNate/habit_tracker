import express from 'express';
import { createHabit, getHabits, getHabit } from '../controllers/habitController';

const router = express.Router();

router.post("/habit", createHabit);