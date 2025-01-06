import express from "express";
import usersController from "../controllers/users.controller.js";

// Bộ router users
const usersRouter = express.Router();

// users API
usersRouter.get("/user-list", usersController.userList);

export default usersRouter;
