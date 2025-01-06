import { Sequelize } from "sequelize";
import initModels from "../../models/init-models.js";
import { DATABASE_URL } from "../constants/app.constant.js";
// Tạo kết nối BE - DB

export const sequelize = new Sequelize(DATABASE_URL, { logging: false });

// Kiểm tra kết nối BE - DB
try {
  await sequelize.authenticate();
  console.log("Kết nối db thành công");
} catch (error) {
  console.error("Kết nối db không thành công", error);
}

// Tạo biến models chứa dữ liệu tất cả các table
const models = initModels(sequelize);

export default models;
