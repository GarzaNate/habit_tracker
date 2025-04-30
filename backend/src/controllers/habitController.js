import Habit from "../models/Habit.js";

// Create a new habit
export const createHabit = async (req, res) => {
    try {
        const { name, frequency, goal } = req.body;
        // const userId = req.user._id;
        const habit = new Habit({ name, frequency, goal, userId });
        await habit.save();
        res.status(201).json(habit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Get all habits from logged in user
export const getHabits = async (req, res) => {
    try {
        const userId = req.user._id;
        const habits = await Habit.find
            ({ userId });
        res.status(200).json(habits);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Get a single habit by id
export const getHabit = async (req, res) => {
    const { id } = req.params;
    try {
        const habit = await Habit.findById(id);
        if (!habit) {
            return res.status(404).json({ message: error.message });
        }
        res.status(200).json(habit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
}

// Update a habit
export const updateHabit = async (req, res) => {
    const { id } = req.params;
    const { name, frequency, goal } = req.body;
    try {
        const habit = await Habit.findByIdAndUpdate(id, { name, frequency, goal }, { new: true });
        if (!habit) {
            return res.status(404).json({ message: "Habit not found" });
        }
        res.status(200).json(habit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a habit
export const deleteHabit = async (req, res) => {
    const { id } = req.params;
    try {
        const habit = await Habit.findByIdAndDelete(id);
        if (!habit) {
            return res.status(404).json({ message: "Habit not found" });
        }
        res.status(200).json({ message: "Habit deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Increment habit streak ??
