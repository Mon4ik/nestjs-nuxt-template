import {Get, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
	@InjectRepository(User)
	private readonly userRepository: Repository<User>

	@Get("/")
	getUsers() {
		return this.userRepository.find()
	}
}
