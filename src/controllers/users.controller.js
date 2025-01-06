import { response } from "express";
import usersService from "../services/users.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

const usersController = {
  userList: async (request, response, next) => {
    try {
      const userList = await usersService.userList();
      const resData = responseSuccess(200, "Successfully", userList);
      response.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default usersController;
