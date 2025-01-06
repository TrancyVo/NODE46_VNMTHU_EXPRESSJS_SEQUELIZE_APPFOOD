import { responseSuccess } from "../common/helpers/response.helper.js";
import likeResService from "../services/likeRes.service.js";

const likeResController = {
  likeRes: async (request, response, next) => {
    try {
      const likeRes = await likeResService.likeRes(request);
      const resData = responseSuccess(200, "Successfully", likeRes);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  unlikeRes: async (request, response, next) => {
    try {
      const unlikeRes = await likeResService.unlikeRes(request);
      const resData = responseSuccess(200, "Successfully", unlikeRes);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  getLikeResList: async (request, response, next) => {
    try {
      const likeResList = await likeResService.likeResList(request);
      const resData = responseSuccess(200, "Successfully", likeResList);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  getLikeUserList: async (request, response, next) => {
    try {
      const likeUserList = await likeResService.likeUserList(request);
      const resData = responseSuccess(200, "Successfully", likeUserList);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default likeResController;
