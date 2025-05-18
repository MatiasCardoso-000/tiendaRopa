import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, require: true,trim:true },
  email: { type: String, require: true, unique: true ,trim:true },
  password: { type: String, require: true },
  role: { type: String, enum: ["user", "admin"] ,default: "user"},
  createdAt:{type:String, default: new Date().toLocaleString()},
  updatedAt:{type:String, default: new Date().toLocaleString()}
});

export default mongoose.model("User", userSchema);
