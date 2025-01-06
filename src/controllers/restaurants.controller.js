import { responseSuccess } from "../common/helpers/response.helper.js";
import restaurantsService from "../services/restaurant.service.js";

const restaurantsController = {
  restaurantsList: async (request, response, next) => {
    try {
      const restaurantsList = await restaurantsService.restaurantsList();
      const resData = responseSuccess(200, "Successfully", restaurantsList);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  restaurantsLike: async (request, response, next) => {
    try {
      const restaurantsLike = await restaurantsService.restaurantsLike();
      const resData = responseSuccess(200, "Successfully", restaurantsLike);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default restaurantsController;
