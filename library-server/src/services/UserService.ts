import bcrypt from "bcrypt";

import { config } from "../config";

import UserDao, { IUserModel } from "../daos/UserDao";
import { IUser } from "../models/User";

//return a Promise of type IUserModel
export async function register(user: IUser): Promise<IUserModel> {
  const ROUNDS = config.server.rounds;

  try {
    const hashedPassword = await bcrypt.hash(user.password, ROUNDS);
  } catch (error: any) {}
}
