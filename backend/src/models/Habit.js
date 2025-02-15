import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "New habit"
    },
    frequency: {
        type: String,
        required: true,
        enum: ["daily", "weekly", "monthly"],
        default: "daily"
    },
    goal: {
        type: Number,
        required: true
    },
    streak: {
        type: Number,
        required: true,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,  // ✅ References User model
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Habit = mongoose.model('Habit', habitSchema);
export default Habit;
