import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { RmqModule } from '@app/common';

@Module({
  imports: [
    RmqModule.register({
      name: 'USERS_SERVICE',
    }),
  ],
  controllers: [UsersController],
})
export class UsersModule {}