import { Module } from '@nestjs/common';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rating } from 'src/common/models/rating-model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Rating]),
  JwtModule.register({
    secret: process.env.SECRET_KEY || "SECRET_KEY",
    signOptions: {
      expiresIn: "24h"
    }
  })],
  controllers: [RatingController],
  providers: [RatingService]
})
export class RatingModule {}
