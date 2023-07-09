import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeviceInfo } from 'src/models/device-info-model';
import { Device } from 'src/models/device-model';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [SequelizeModule.forFeature([Device]), FilesModule],
  providers: [DeviceService],
  controllers: [DeviceController]
})
export class DeviceModule {}
