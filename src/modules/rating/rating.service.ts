import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRatingDto } from './dto/create-rating.dto';
import { Rating } from 'src/common/models/rating-model';

@Injectable()
export class RatingService {
    constructor(@InjectModel(Rating) private ratingModel: typeof Rating){}

    async create(dto: CreateRatingDto){
        const rating = await this.ratingModel.create({...dto})
        return rating
    }
}
