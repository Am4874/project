import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log(`error mongodb connection error : ${err} `);
      throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(` server  is listing port${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Mongodb Connection Failed !!! ${err}`);
  });
