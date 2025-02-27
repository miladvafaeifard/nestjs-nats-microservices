import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'create_user' })
  async createUser(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'get_all_users' })
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @MessagePattern({ cmd: 'get_user_by_id' })
  async getUserById(@Payload() payload: { id: string }) {
    return this.usersService.findOne(payload.id);
  }
}