import express from "express";
import rootRouter from "./src/routers/root.router.js";
import { middlewareError } from "./src/common/helpers/error.helper.js";

const app = express();

app.use(express.json());
app.use(rootRouter);
app.use(middlewareError);

app.listen(3070, () => {
  console.log(`Cổng 3070 hoạt động`);
});
