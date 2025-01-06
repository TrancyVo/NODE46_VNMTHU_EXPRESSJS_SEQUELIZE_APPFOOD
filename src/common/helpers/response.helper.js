export const responseSuccess = (
  code = 200,
  message = "Getting List Successfully",
  metaData = null
) => {
  if (typeof code !== "number") code = 500;
  return {
    status: "success",
    code: code,
    message: message,
    metaData: metaData,
  };
};

export const responseError = (
  code = 500,
  message = "Internal Server Error",
  stack = null
) => {
  //Kiểm tra nếu code là chuổi => chuyển code về thành 500 để trách lỗi sập server
  if (typeof code !== "number") code = 500;
  return {
    status: "error",
    code: code,
    message: message,
    stack: stack, // Dấu vết của lỗi
  };
};
