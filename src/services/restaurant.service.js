import models from "../common/sequelize/init.sequelize.js";

const restaurantsService = {
  restaurantsList: async () => {
    const restaurantsList = await models.restaurant.findAll({ raw: true });
    return restaurantsList;
  },
  restaurantsLike: async () => {
    const restaurantsLike = await models.like_res.findAll({ raw: true });
    return restaurantsLike;
  },
};

export default restaurantsService;
