import dotenv from "@dotenvx/dotenvx";
import convict from "convict";

dotenv.config();

convict.addFormat({
  name: "requiredString",
  validate: function (value: string) {
    if (value.trim() === "") {
      throw new Error("Value is required");
    }
    return value;
  },
});

export const config = convict({
  db: {
    host: {
      doc: "Database host",
      format: "requiredString",
      default: "",
      env: "DB_HOST",
    },
    port: {
      doc: "Database port",
      format: "port",
      default: 5432,
      env: "DB_PORT",
    },
    name: {
      doc: "Database name",
      format: "requiredString",
      default: "",
      env: "DB_NAME",
    },
    user: {
      doc: "Database user",
      format: "requiredString",
      default: "",
      env: "DB_USER",
    },
    password: {
      doc: "Database password",
      format: "requiredString",
      default: "",
      env: "DB_PASSWORD",
    },
    schema: {
      doc: "Database schema",
      format: "requiredString",
      default: "",
      env: "DB_SCHEMA",
    },
  },
});

config.validate({ allowed: "strict" });

export const dbConfig = {
  host: config.get("db.host"),
  port: config.get("db.port"),
  name: config.get("db.name"),
  user: config.get("db.user"),
  password: config.get("db.password"),
  schema: config.get("db.schema"),
};
