import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Cхема для хранения id пользователя и токена

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

export default model("Token", TokenSchema);
