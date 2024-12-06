import express from "express";
import { createAward, getAwardsone, getAwardsall, deleteAward, updateAward } from "../controllers/awardController.js"; // Correctly import the functions

const route = express.Router();

// Define the routes for creating, getting, and deleting awards
route.post("/create", createAward);  // Route to create an award
route.get("/ondu", getAwardsone);     // Route to get awards (this can be customized based on your needs)
route.delete("/delete/:id", deleteAward); // Route to delete an award
route.get("/yella",getAwardsall);
route.put("/changemaadu/:id",updateAward)
// Export the routes
export default route;