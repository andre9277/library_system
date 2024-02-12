//custom error for register user
export class UnableToSaveUserError extends Error {
  constructor(message: string) {
    super(message);
  }
}

//error for invalid username or password
export class InvalidUsernameOrPasswrodError extends Error {
  constructor(message: string) {
    super(message);
  }
}
