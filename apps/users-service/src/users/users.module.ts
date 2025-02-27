import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { DatabaseModule, RmqModule } from '@app/common';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    RmqModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}