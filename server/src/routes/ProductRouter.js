// Import the Express module
import express from 'express';

// Create a new Express router
const ProductRouter = express.Router();

// Define a route for uploading a product
ProductRouter.post("/upload-product",()=>{ console.log("post/upload-product")})

// Define a route for getting a product
ProductRouter.get("/get-product",()=>{ console.log("get/get-product")})

// Define a route for updating a product
ProductRouter.post("/update-product",()=>{ console.log("post/update-product")})

// Define a route for getting products by category
ProductRouter.get("/get-categoryProduct",()=>{ console.log("get/get-categoryProduct")})

// Define a route for adding a category to a product
ProductRouter.post("/category-product",()=>{ console.log("post/category-product")})

// Define a route for getting details of a product
ProductRouter.post("/product-details",()=>{ console.log("post/product-details")})

// Define a route for searching products
ProductRouter.get("/search",()=>{ console.log("get/search")})

// Define a route for filtering products
ProductRouter.post("/filter-product",()=>{ console.log("post/filter-product")})

// Export the ProductRouter for use in other files
export default ProductRouter;