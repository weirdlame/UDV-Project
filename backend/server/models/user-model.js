import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Модель пользователя

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String }, // Ссылка для активации аккаунта
});

export default model("User", UserSchema);
