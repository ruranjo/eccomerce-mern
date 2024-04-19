// Import the Express module
import express from 'express';

// Create a new Express router
const AdminRouter = express.Router();

// Define routes for admin panel 
AdminRouter.get("/all-user",()=>{ console.log("get/all-user")})
AdminRouter.post("/update-user",()=>{ console.log("post/update-user")})

// Export the AdminRouter for use in other files
export default AdminRouter;