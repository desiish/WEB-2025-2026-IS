import dotenv from "@dotenvx/dotenvx";
dotenv.config();

console.log("Hello, World!");
console.log("Database Port:", process.env.DB_PORT);

const dbConfig = {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
}
