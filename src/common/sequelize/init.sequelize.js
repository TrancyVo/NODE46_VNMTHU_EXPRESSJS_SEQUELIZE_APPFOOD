import { Sequelize } from "sequelize";
import initModels from "../../models/init-models.js";
// Tạo kết nối BE - DB
export const sequelize = new Sequelize(
  "mysql://root:1234@127.0.0.1:3307/baitap_restaurant",
  { logging: false }
);

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
