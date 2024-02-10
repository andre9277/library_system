import bcrypt from "bcrypt";

import { config } from "../config";

import UserDao, { IUserModel } from "../daos/UserDao";
import { IUser } from "../models/User";
import { UnableToSaveUserError } from "../utils/LibraryErros";

//return a Promise of type IUserModel
export async function register(user: IUser): Promise<IUserModel> {
  const ROUNDS = config.server.rounds;

  try {
    const hashedPassword = await bcrypt.hash(user.password, ROUNDS);

    //destructer the user that we passed in, and replace the password with the password encrypted
    const saved = new UserDao({ ...user, password: hashedPassword });

    //saves the user to our database and return it
    return await saved.save();
  } catch (error: any) {
    /* throw new Error("Unable to create user at this time"); */

    throw new UnableToSaveUserError(error.message); //we can check what type of error we have in our controller
  }
}
