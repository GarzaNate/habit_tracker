import User from "../models/User.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.find({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({ name, email, password });
        await user.save();

        const token = user.getSignedJwtToken();
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}