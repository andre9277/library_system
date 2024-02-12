//Basic Authentication
import { Request, Response } from "express";
import { login, register } from "../services/UserService";
import { IUser } from "../models/User";
import { IUserModel } from "../daos/UserDao";

async function handleRegister(req: Request, res: Response) {
  const user: IUser = req.body; //json body of our request

  try {
    const registeredUser = await register(user);

    res.status(201).json({
      message: "User successfully created",
      user: {
        _id: registeredUser._id,
        type: registeredUser.type,
        firstName: registeredUser.firstName,
        lastName: registeredUser.lastName,
        email: registeredUser.email,
      },
    });
  } catch (error: any) {
    //user cant register twice
    if (error.message.includes("E11000 duplicate key error collection")) {
      res.status(409).json({
        message: "User with email already exists",
        error: error.message,
      });
    } else {
      //Outro erro
      res.status(500).json({
        message: "Unalbe to register user at this time",
        error: error.message,
      });
    }
  }
}

async function handleLogin(req: Request, res: Response) {
  const credentials = req.body;

  try {
    const loggedIn: IUserModel = await login(credentials);

    //if we login
    res.status(200).json({
      message: "User logged ion successfully",
      user: {
        _id: loggedIn.id,
        type: loggedIn.type,
        firstName: loggedIn.firstName,
        lastName: loggedIn.lastName,
        email: loggedIn.email,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to login user at this time",
      error: error.message,
    });
  }
}

export default { handleRegister, handleLogin };
