// Import the Express module
import express from 'express';

// Create a new Express router
const CardRouter = express.Router();

// Define a route for adding a product to the cart
CardRouter.post("/addtocart",()=>{ console.log("post/addtocart")})

// Define a route for counting the number of products added to the cart
CardRouter.get("/countAddToCartProduct",()=>{ console.log("get/countAddToCartProduct")})

// Define a route for viewing the products in the cart
CardRouter.get("/view-card-product",()=>{ console.log("get/view-card-product")})

// Define a route for updating a product in the cart
CardRouter.post("/update-cart-product",()=>{ console.log("post/update-cart-product")})

// Define a route for deleting a product from the cart
CardRouter.post("/delete-cart-product",()=>{ console.log("post/delete-cart-product")})

// Export the CardRouter for use in other files
export default CardRouter;