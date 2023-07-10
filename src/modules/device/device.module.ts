import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Device } from 'src/common/models/device-model';
import { FilesModule } from 'src/common/files/files.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Device]), 
  JwtModule.register({
    secret: process.env.SECRET_KEY || "SECRET_KEY",
    signOptions: {
      expiresIn: "24h"
    }
  })
  ,FilesModule],
  providers: [DeviceService],
  controllers: [DeviceController]
})
export class DeviceModule {}
