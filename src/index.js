import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    // app.on("error", (error) => {
    //   console.log(`error mongodb connection error : ${err} `);
    //   throw error;
    // });
    // console.error(error);
    app.listen(process.env.PORT || 8001, () => {
      console.log(
        ` server  is listing port: http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.error(`Mongodb Connection Failed !!! ${err}`);
    // throw err;
  });
