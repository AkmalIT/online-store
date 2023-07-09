import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user-model';
import { Basket } from 'src/models/basket-model';
import { JwtModule } from '@nestjs/jwt';

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
