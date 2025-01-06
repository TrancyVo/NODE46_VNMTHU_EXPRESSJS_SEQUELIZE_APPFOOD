import express from "express";
import likeResController from "../controllers/likeRes.controller.js";

// Bộ router users
const likeRestRouter = express.Router();

// users API
likeRestRouter.post("/like", likeResController.likeRes);
likeRestRouter.post("/unlike", likeResController.unlikeRes);
likeRestRouter.get("/restaurant-like/:resId", likeResController.getLikeResList);
likeRestRouter.get("/user-like/:userId", likeResController.getLikeUserList);

export default likeRestRouter;
