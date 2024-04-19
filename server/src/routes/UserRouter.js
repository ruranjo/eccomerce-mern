// Import the Express module
import express from 'express';

// Create a new Express router
const UserRouter = express.Router();

// Define a route for user signup
UserRouter.post("/signup",()=>{ console.log("post/signup")})

// Define a route for user signin
UserRouter.post("/signin",()=>{ console.log("post/signin")})

// Define a route for getting user details
UserRouter.get("/user-details",()=>{ console.log("get/user-details")})

// Define a route for user logout
UserRouter.get("/userLogout",()=>{ console.log("get/userLogout")})

// Export the UserRouter for use in other files
export default UserRouter;