"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../services/UserService");
const LibraryErros_1 = require("../utils/LibraryErros");
function handleRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body; //json body of our request
        try {
            const registeredUser = yield (0, UserService_1.register)(user);
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
        }
        catch (error) {
            //user cant register twice
            if (error.message.includes("E11000 duplicate key error collection")) {
                res.status(409).json({
                    message: "User with email already exists",
                    error: error.message,
                });
            }
            else {
                //Outro erro
                res.status(500).json({
                    message: "Unalbe to register user at this time",
                    error: error.message,
                });
            }
        }
    });
}
function handleLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = req.body;
        try {
            const loggedIn = yield (0, UserService_1.login)(credentials);
            //if we login
            res.status(200).json({
                message: "User logged in successfully",
                user: {
                    _id: loggedIn.id,
                    type: loggedIn.type,
                    firstName: loggedIn.firstName,
                    lastName: loggedIn.lastName,
                    email: loggedIn.email,
                },
            });
        }
        catch (error) {
            if (error instanceof LibraryErros_1.InvalidUsernameOrPasswrodError) {
                res
                    .status(401)
                    .json({
                    message: "Unable to login user at this time",
                    error: error.message,
                });
            }
            else {
                res.status(500).json({
                    message: "Unable to login user at this time",
                    error: error.message,
                });
            }
        }
    });
}
exports.default = { handleRegister, handleLogin };
