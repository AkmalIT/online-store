import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Rating } from 'src/models/rating-model';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService {
    constructor(@InjectModel(Rating) private ratingModel: typeof Rating){}

    async create(dto: CreateRatingDto){
        const rating = await this.ratingModel.create({...dto})
        return rating
    }
}
