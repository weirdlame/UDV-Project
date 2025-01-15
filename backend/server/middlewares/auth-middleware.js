import ApiError from "../exceptions/api.error.js";
import tokenService from "../service/token-service.js";

export default function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return next(
        ApiError.UnauthorizedError("Отсутствует заголовок авторизации")
      );
    }

    const parts = authorizationHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return next(ApiError.UnauthorizedError("Неверный формат токена"));
    }

    const accessToken = parts[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError("Токен доступа отсутствует"));
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnauthorizedError("Недействительный токен доступа"));
    }

    req.user = userData;
    next();
  } catch (error) {
    console.error("Ошибка авторизации:", error);
    return next(ApiError.UnauthorizedError("Ошибка авторизации"));
  }
}
