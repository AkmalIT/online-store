import { Module } from '@nestjs/common';
import { DeviceInfoController } from './device-info.controller';
import { DeviceInfoService } from './device-info.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeviceInfo } from 'src/models/device-info-model';

@Module({
  imports: [SequelizeModule.forFeature([DeviceInfo])],
  controllers: [DeviceInfoController],
  providers: [DeviceInfoService]
})
export class DeviceInfoModule {}
