import { responseSuccess } from "../common/helpers/response.helper.js";
import rateResService from "../services/rateRes.service.js";

const rateResController = {
  rateRes: async (request, response, next) => {
    try {
      const rateRes = await rateResService.rateRes(request);
      const resData = responseSuccess(200, "Successfully", rateRes);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  getRateRes: async (request, response, next) => {
    try {
      const rateRes = await rateResService.getRateRes(request);
      const resData = responseSuccess(200, "Successfully", rateRes);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  getRateUser: async (request, response, next) => {
    try {
      const rateUser = await rateResService.getRateUser(request);
      const resData = responseSuccess(200, "Successfully", rateUser);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default rateResController;
