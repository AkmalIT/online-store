import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Type } from 'src/common/models/type-model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Type]),
  JwtModule.register({
    secret: process.env.SECRET_KEY || "SECRET_KEY",
    signOptions: {
      expiresIn: "24h"
    }
  })],
  providers: [TypesService],
  controllers: [TypesController]
})
export class TypesModule {}
