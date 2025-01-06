import express from "express";
import restaurantsRouter from "./restaurants.router.js";
import usersRouter from "./users.router.js";
import likeRestRouter from "./likeRes.router.js";
import rateResRouter from "./rateRes.router.js";
import orderRouter from "./order.router.js";

// Router tổng
const rootRouter = express.Router();

// Kiểm tra server còn hoạt động không
rootRouter.get(`/`, (request, response, next) => {
  response.json(`server hoạt động`);
});

// Liên kết với các bộ router khác
rootRouter.use("/restaurants", restaurantsRouter);
rootRouter.use("/users", usersRouter);
rootRouter.use("/like-res", likeRestRouter);
rootRouter.use("/rate-res", rateResRouter);
rootRouter.use("/order", orderRouter);

export default rootRouter;
