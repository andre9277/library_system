//Basic Authentication
import { Request, Response } from "express";
import { register } from "../services/UserService";
import { IUser } from "../models/User";

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
    res.status(500).json({
      message: "Unalbe to register user at this time",
      error: error.message,
    });
  }
}

export default { handleRegister };
