import { Module } from '@nestjs/common';
import { BasketDeviceController } from './basket_device.controller';
import { BasketDeviceService } from './basket_device.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketDevice } from 'src/common/models/basket-device-model';

@Module({
  imports: [SequelizeModule.forFeature([BasketDevice])],
  controllers: [BasketDeviceController],
  providers: [BasketDeviceService]
})
export class BasketDeviceModule {}
