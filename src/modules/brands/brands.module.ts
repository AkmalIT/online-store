import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brand } from 'src/common/models/brand-models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Brand]),
  JwtModule.register({
    secret: process.env.SECRET_KEY || "SECRET_KEY",
    signOptions: {
      expiresIn: "24h"
    }
  })],
  controllers: [BrandsController],
  providers: [BrandsService]
})
export class BrandsModule {}
