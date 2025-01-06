import { responseSuccess } from "../common/helpers/response.helper.js";
import orderService from "../services/order.service.js";

const orderController = {
  orderFood: async (request, response, next) => {
    try {
      const orderFood = await orderService.orderFood(request);
      const resData = responseSuccess(200, "Successfully", orderFood);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};
export default orderController;
