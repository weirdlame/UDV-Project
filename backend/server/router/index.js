import { Router } from "express";
import userController from "../controllers/user-controller.js";
const router = Router();
import { body } from "express-validator";
import authMiddleware from "../middlewares/auth-middleware.js";

// Регистрация нового пользователя
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  userController.registration
);
// Логин пользователя
router.post("/login", userController.login);

// Логаут (выход) пользователя
router.post("/logout", userController.logout);

// Активация аккаунта по ссылке
router.get("/activate/:link", userController.activate);

// Перезапись access токена
router.get("/refresh", userController.refresh);

export default router;
