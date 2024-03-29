import express from "express";
import AuthController from "../controllers/AuthController";
import { Schemas, ValidateSchema } from "../middlewares/Validation";

const router = express.Router();

//post request, handle by the handleRegister
router.post(
  "/register",
  ValidateSchema(Schemas.user.create),
  AuthController.handleRegister
);

//handle login
router.post(
  "/login",
  ValidateSchema(Schemas.user.login),
  AuthController.handleLogin
);

export = router;
