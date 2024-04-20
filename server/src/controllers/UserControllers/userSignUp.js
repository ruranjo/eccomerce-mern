// Import the user model and bcrypt for password hashing
import userModel from "../../models/userModel.js";
import bcrypt from 'bcryptjs';

// Define an asynchronous function for handling user sign-up requests
const userSignUpController = async (req, res) => {
    try {
        // Extract email, password, and name from the request body
        const { email, password, name } = req.body;

        // Check if a user with the provided email already exists in the database
        const user = await userModel.findOne({ email });
        console.log("user", user);

        // If a user exists, throw an error to stop the process
        if (user) {
            throw new Error("Already user exits.");
        }

        // Validate that email, password, and name are provided
        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }
        if (!name) {
            throw new Error("Please provide name");
        }

        // Generate a salt and hash the password using bcrypt
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        // Check if the password hashing succeeded
        if (!hashPassword) {
            throw new Error("Something is wrong");
        }

        // Create a new user payload including the role and hashed password
        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        };

        // Create a new user instance with the payload and save it to the database
        const userData = new userModel(payload);
        const saveUser = await userData.save();

        // If successful, send back a 201-created response with user data
        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created Successfully!"
        });

    } catch (err) {
        // If an error occurs, respond with the error message and status
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
};

// Export the userSignUpController function to be used in other parts of the application
export default userSignUpController;