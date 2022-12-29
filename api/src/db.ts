import mongoose, { ConnectOptions } from "mongoose";
import config from "./config/config";

mongoose.set("strictQuery", true);

mongoose
  .connect(config.DB.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .catch((error) => console.log(error));

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection successfully established");
});

connection.on("error", (error) => {
  console.log(error);
  process.exit(0);
});
