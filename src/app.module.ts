import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { User } from './common/models/user-model';
import { Basket } from './common/models/basket-model';
import { BasketDevice } from './common/models/basket-device-model';
import { Type } from './common/models/type-model';
import { Brand } from './common/models/brand-models';
import { Device } from './common/models/device-model';
import { Rating } from './common/models/rating-model';
import { DeviceInfo } from './common/models/device-info-model';
import { TypeBrand } from './common/models/type-brand-model';
import { UsersModule } from './modules/users/users.module';
import { TypesModule } from './modules/types/types.module';
import { BrandsModule } from './modules/brands/brands.module';
import { DeviceModule } from './modules/device/device.module';
import { FilesModule } from './common/files/files.module';
import { RatingModule } from './modules/rating/rating.module';
import { DeviceInfoModule } from './modules/device-info/device-info.module';
import { BasketDeviceModule } from './modules/basket_device/basket_device.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
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
