import { DataSource } from "typeorm";
import dotenv from "@dotenvx/dotenvx";
import { dbConfig } from "./config";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.name,
  schema: dbConfig.schema,
  migrations: [`${__dirname}/migrations/*`],
  entities: [`${__dirname}/entities/*`],
  logging: true,
  synchronize: false,
});
