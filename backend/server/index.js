import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import router from "./router/index.js";
import errorMiddleware from "./middlewares/error-middleware.js";
// Миддлвар для обработки ошибок должен быть подключен последним, чтобы перехватывать все ошибки,
// возникшие в предыдущих миддлварах и обработчиках.

const PORT = process.env.PORT || 5003;
const app = express();

app.use(express.json()); // Парсит JSON в теле запроса
app.use(cookieParser()); // Парсит cookies
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL })); // Включает CORS
app.use("/api", router); // Обрабатывает маршруты, начинающиеся с /api
app.use(errorMiddleware); // Обрабатывает ошибки

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {});
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();
