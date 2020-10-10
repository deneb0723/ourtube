import mongoose from "mongoose";
import pLM from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  kakaoId: Number,
  githubId: Number,
});

UserSchema.plugin(pLM, {
  usernameField: "email"
});

const model = mongoose.model("User", UserSchema);

export default model;