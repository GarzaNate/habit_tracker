import User from "../models/User.js";

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({ username, email, password });
        await user.save();

        const token = user.getSignedJwtToken();

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });
        res.status(201).json({
            _id: user._id,
            name: user.username,
            email: user.email
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = user.getSignedJwtToken();

        res.cookie('token', token, {
            httpOnly: true,
            secure: false, // Set to true in production
            sameSite: 'lax', 
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(200).json({
            message: "User logged in successfully",
            _id: user._id,
            name: user.username,
            email: user.email
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const logoutUser = (req, res) => {
    console.log("Logout hit")
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'lax',
        secure: false, // Set to true in production
        path: '/'
    });
    res.status(200).json({ message: "User logged out successfully" });
}