import express from "express";
import AuthController from "../controllers/AuthController";

const router = express.Router();

//post request, handle by the handleRegister
router.post("/register", AuthController.handleRegister);

export = router;
