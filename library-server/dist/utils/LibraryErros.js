"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUsernameOrPasswrodError = exports.UnableToSaveUserError = void 0;
//custom error for register user
class UnableToSaveUserError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.UnableToSaveUserError = UnableToSaveUserError;
//error for invalid username or password
class InvalidUsernameOrPasswrodError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.InvalidUsernameOrPasswrodError = InvalidUsernameOrPasswrodError;
