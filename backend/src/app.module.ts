import {Module} from '@nestjs/common';

import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

import TypeormConfig from "../typeorm.config";
import {AppService} from './app.service';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['.env', '.env.development', '.env.production'],
		}),
		TypeOrmModule.forRoot(Object.assign(TypeormConfig.options, {
			migrations: ["dist/migrations/*.js"],
		})),
		UserModule,
	],
	providers: [AppService],
})
export class AppModule {
}
