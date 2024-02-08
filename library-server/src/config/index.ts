import dotenv from "dotenv";

dotenv.config();

//information of username and password of mongo
const MONGO_USERNAME: string = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || "";

//url to connect
const MONGO_URL: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/librarydb`;

//custom server port or pass 80000 by default
const PORT: number = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 8000;

//export to access files in other places
export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: PORT,
  },
};
