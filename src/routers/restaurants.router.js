import express from "express";
import restaurantsController from "../controllers/restaurants.controller.js";

// Bộ router restaurants
const restaurantsRouter = express.Router();

// restaurants API
restaurantsRouter.get(
  "/restaurant-list",
  restaurantsController.restaurantsList
);
restaurantsRouter.get(
  "/restaurant-like",
  restaurantsController.restaurantsLike
);

export default restaurantsRouter;
