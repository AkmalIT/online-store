import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user-model';
import { Basket } from './models/basket-model';
import { BasketDevice } from './models/basket-device-model';
import { Brand } from './models/brand-models';
import { Device } from './models/device-model';
import { Rating } from './models/rating-model';
import { DeviceInfo } from './models/device-info-model';
import { TypeBrand } from './models/type-brand-model';
import { UsersModule } from './users/users.module';
import { TypesModule } from './types/types.module';
import {Type} from "./models/type-model"
import { BrandsModule } from './brands/brands.module';
import { DeviceModule } from './device/device.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RatingModule } from './rating/rating.module';
import { DeviceInfoModule } from './device-info/device-info.module';
import { BasketDeviceModule } from './basket_device/basket_device.module';
import * as path from "path"  

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: +process.env.PG_PORT,
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [User, Basket, BasketDevice, Type, Brand, Device, Rating, DeviceInfo, TypeBrand],
      autoLoadModels: true
    }),
    UsersModule,
    TypesModule,
    BrandsModule,
    DeviceModule,
    FilesModule,
    RatingModule,
    DeviceInfoModule,
    BasketDeviceModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
