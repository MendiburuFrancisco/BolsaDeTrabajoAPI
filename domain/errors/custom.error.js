class CustomError extends Error {
  constructor(message, status) {
    // message: string
    // status: number

    super(message);
    this.message = message;
    this.status = status;

  }

 
  static badRequest(message) {
    return new CustomError(message, 400);
  }

  static notFound(message) {
    return new CustomError(message, 404);
  }

  static internalServer(message = "Internal server error") {
    return new CustomError(message, 500);
  }

  static unauthorized(message) {
    return new CustomError(message, 401);
  }

  static forbidden(message) {
    return new CustomError(message, 403);
  }

  // static conflict(message) {
  //     return new CustomError(message, 409)
  //     }

  // static unprocessable(message) {
  //     return new CustomError(message, 422)
  //     }

  // static tooMany(message) {
  //     return new CustomError(message, 429)
  //     }
}

module.exports = CustomError;
