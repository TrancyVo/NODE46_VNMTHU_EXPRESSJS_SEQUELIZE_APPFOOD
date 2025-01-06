import models from "../common/sequelize/init.sequelize.js";

const usersService = {
  userList: async (request, response, next) => {
    const userList = await models.users.findAll({ raw: true });
    return userList;
  },
};
export default usersService;
