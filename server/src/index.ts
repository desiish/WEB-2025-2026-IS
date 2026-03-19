import "reflect-metadata";
import { AppDataSource } from "./app-data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
