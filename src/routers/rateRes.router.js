import express from "express";
import rateResController from "../controllers/rateRes.controller.js";

// Router
const rateResRouter = express.Router();

// Router's API
rateResRouter.post("/rate", rateResController.rateRes);
rateResRouter.get("/restaurant-rate/:resId", rateResController.getRateRes);
rateResRouter.get("/user-rate/:userId", rateResController.getRateUser);
export default rateResRouter;
