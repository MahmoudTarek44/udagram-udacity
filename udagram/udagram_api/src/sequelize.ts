import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
	username: config.username,
	password: config.password,
	database: config.database,
	host: config.host,
	port: +config.db_port,
	dialect: "postgres",
	storage: ":memory:",
})

sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database:', err);
        });