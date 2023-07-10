import { Module } from '@nestjs/common';
import { BasketDeviceController } from './basket_device.controller';
import { BasketDeviceService } from './basket_device.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketDevice } from 'src/common/models/basket-device-model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([BasketDevice]),
  JwtModule.register({
    secret: process.env.SECRET_KEY || "SECRET_KEY",
    signOptions: {
      expiresIn: "24h"
    }
  })],
  controllers: [BasketDeviceController],
  providers: [BasketDeviceService]
})
export class BasketDeviceModule {}
