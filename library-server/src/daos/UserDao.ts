import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../models/User";

export interface IUserModel extends IUser, Document {}

const UserSchema = new Schema(
  {
    type: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  //new object, allows to import more settings
  {
    versionKey: false,
  }
);

//creates a db collection with name User and based on our UserSchema. Can comunicate with the db from the app
export default mongoose.model<IUserModel>("User", UserSchema);
