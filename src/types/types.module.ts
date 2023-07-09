import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Type } from 'src/models/type-model';

@Module({
  imports: [SequelizeModule.forFeature([Type])],
  providers: [TypesService],
  controllers: [TypesController]
})
export class TypesModule {}
