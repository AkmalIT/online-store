import { Controller, Post, Body } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {

    constructor(private ratingService: RatingService){}

    @Post()
    createRating(@Body() dto: CreateRatingDto){
        return this.ratingService.create(dto)
    }
}
