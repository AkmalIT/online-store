import { Module } from '@nestjs/common';
import { DeviceInfoController } from './device-info.controller';
import { DeviceInfoService } from './device-info.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeviceInfo } from 'src/common/models/device-info-model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([DeviceInfo]),
  JwtModule.register({
    secret: process.env.SECRET_KEY || "SECRET_KEY",
    signOptions: {
      expiresIn: "24h"
    }
  })],
  controllers: [DeviceInfoController],
  providers: [DeviceInfoService]
})
export class DeviceInfoModule {}
