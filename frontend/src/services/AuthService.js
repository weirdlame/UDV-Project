import $api from "../http/index.js";

export default class AuthService {
  static async login(email, password) {
    try {
      return $api.post("/login", { email, password });
    } catch (error) {
      console.error("Ошибка авторизации:", error);
      throw error;
    }
  }

  static async registration(email, password) {
    try {
      return $api.post("/registration", {
        email,
        password,
      });
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      throw error;
    }
  }

  static async logout() {
    try {
      return $api.post("/logout");
    } catch (error) {
      console.error("Ошибка выхода:", error);
      throw error;
    }
  }
}
