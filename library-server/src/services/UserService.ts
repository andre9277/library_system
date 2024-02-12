import bcrypt from "bcrypt";

import { config } from "../config";

import UserDao, { IUserModel } from "../daos/UserDao";
import { IUser } from "../models/User";
import {
  UnableToSaveUserError,
  InvalidUsernameOrPasswrodError,
} from "../utils/LibraryErros";

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

export async function login(credentials: {
  email: string;
  password: string;
}): Promise<IUserModel> {
  const { email, password } = credentials;

  try {
    //search for the spec email in the db
    const user = await UserDao.findOne({ email });

    if (!user) {
      //custom error
      throw new InvalidUsernameOrPasswrodError("Invalid username or password");
    } else {
      //compares the password given in the login and saved in the database
      const validPassword: boolean = await bcrypt.compare(
        password,
        user.password
      );

      //if the passwords match
      if (validPassword) {
        return user;
      } else {
        //custom error
        throw new InvalidUsernameOrPasswrodError(
          "Invalid username or password"
        );
      }
    }
  } catch (error: any) {
    throw error;
  }
}
