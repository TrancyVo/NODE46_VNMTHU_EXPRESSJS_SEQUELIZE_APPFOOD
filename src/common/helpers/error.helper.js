import { responseError } from "./response.helper.js";

export const middlewareError = (error, request, response, next) => {
  const resError = responseError(error.code, error.message, error.stack);
  response.status(resError.code).json(resError);
};

// TẠO EXCEPTION QUẢN LÝ LỖI KIỂM SOÁT ĐƯỢC
export class BadRequestException extends Error {
  constructor(message = "BadRequestException") {
    // khi chạy hàm super() nghĩa là đang chạy hàm constructor của Class Cha (Class Error mà Class BadRequestException đang kế thừa)
    super(message);
    this.code = 400;
  }
}
export class ForbiddenException extends Error {
  constructor(message = "ForbiddenException") {
    super(message);
    this.code = 403;
  }
}
