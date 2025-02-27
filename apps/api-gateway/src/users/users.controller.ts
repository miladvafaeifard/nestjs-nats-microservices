import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersClient.send({ cmd: 'create_user' }, createUserDto);
  }

  @Get()
  async getAllUsers() {
    return this.usersClient.send({ cmd: 'get_all_users' }, {});
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.usersClient.send({ cmd: 'get_user_by_id' }, { id });
  }
}