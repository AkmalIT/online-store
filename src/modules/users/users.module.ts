import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/common/models/user-model';
import { Basket } from 'src/common/models/basket-model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Basket]),
    JwtModule.register({
      secret: process.env.SECRET_KEY || "SECRET_KEY",
      signOptions: {
        expiresIn: "24h"
      }
    })
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
