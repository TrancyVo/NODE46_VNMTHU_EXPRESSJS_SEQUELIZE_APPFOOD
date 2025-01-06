import { BadRequestException } from "../common/helpers/error.helper.js";
import models from "../common/sequelize/init.sequelize.js";

const likeResService = {
  likeRes: async (request) => {
    const { userId, resId } = request.body;

    const existingLike = await models.like_res.findOne({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });

    if (existingLike) {
      throw new BadRequestException("Người dùng đã like nhà hàng trước đó");
    }

    await models.like_res.create({ user_id: userId, res_id: resId });
    return { message: "Like nhà hàng thành công!" };
  },
  unlikeRes: async (request) => {
    const { userId, resId } = request.body;
    const existingLike = await models.like_res.findOne({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    if (!existingLike) {
      throw new BadRequestException("Người dùng chưa like nhà hàng trước đó");
    }
    await models.like_res.destroy({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    return { message: "Đã unlike nhà hàng" };
  },
  likeResList: async (request) => {
    const { resId } = request.params;
    console.log(resId);
    const likeResList = await models.like_res.findAll({
      where: { res_id: resId },
    });
    return likeResList;
  },
  likeUserList: async (request) => {
    const { userId } = request.params;
    console.log(userId);
    const likeUserList = await models.like_res.findAll({
      where: { user_id: userId },
    });
    return likeUserList;
  },
};

export default likeResService;
