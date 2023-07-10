import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@Controller('rating')
export class RatingController {

    constructor(private ratingService: RatingService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    createRating(@Body() dto: CreateRatingDto){
        return this.ratingService.create(dto)
    }
}
