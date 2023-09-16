import {DataSource} from "typeorm";
import {config} from "dotenv";
import {ConfigService} from "@nestjs/config";
import {User} from "./src/user/user.entity";

config()

const configService = new ConfigService()

export default new DataSource({
	type: "postgres",
	host: configService.get("PG_HOST"),
	port: parseInt(configService.get("PG_PORT")),
	username: configService.get("PG_USERNAME"),
	password: configService.get("PG_PASSWORD"),
	database: configService.get("PG_DATABASE"),

	entities: [User],

	migrationsRun: false,
	migrations: ["migrations/*.ts"],
	migrationsTableName: "migrations",
})