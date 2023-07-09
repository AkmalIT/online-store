import { Controller, Post, Body, Get } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateTypeDto } from '../types/dto/create-type.dto';

@Controller('brands')
export class BrandsController {

    constructor(private brandService: BrandsService){}

    @Post()
    create(@Body() dto: CreateTypeDto){
        return this.brandService.create(dto)
    }

    @Get()
    getAll(){
        return this.brandService.getAll()
    }
}
