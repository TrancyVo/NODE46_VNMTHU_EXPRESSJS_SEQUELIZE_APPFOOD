import models from "../common/sequelize/init.sequelize.js";

const rateResService = {
  rateRes: async (request) => {
    const { userId, resId, amount } = request.body;
    console.log(userId, resId, amount);
    await models.rate_res.create({
      user_id: userId,
      resId: resId,
      amount: amount,
    });
    return { message: "Đã đánh giá nhà hàng thành công" };
  },
  getRateRes: async (request) => {
    const { resId } = request.params;
    console.log(resId);
    const rateRes = await models.rate_res.findAll({
      where: { res_id: resId },
    });
    return rateRes;
  },
  getRateUser: async (request) => {
    const { userId } = request.params;
    console.log(userId);
    const rateUser = await models.rate_res.findAll({
      where: { user_id: userId },
    });
    return rateUser;
  },
};

export default rateResService;
