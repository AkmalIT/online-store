import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Device } from 'src/common/models/device-model';
import { FilesModule } from 'src/common/files/files.module';

@Module({
  imports: [SequelizeModule.forFeature([Device]), FilesModule],
  providers: [DeviceService],
  controllers: [DeviceController]
})
export class DeviceModule {}
