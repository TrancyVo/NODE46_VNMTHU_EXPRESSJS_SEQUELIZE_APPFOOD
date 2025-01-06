import models from "../common/sequelize/init.sequelize.js";

const orderService = {
  orderFood: async (request) => {
    const { userId, foodId, amount, codes, arrSubId } = request.body;
    console.log({ userId, foodId, amount, codes, arrSubId });
    const orderFood = await models.order.create({
      user_id: userId,
      food_id: foodId,
      amount: amount,
      codes: codes,
      arr_sub_id: arrSubId,
    });
    return { message: "Đã thêm món thành công", orderFood };
  },
};

export default orderService;
