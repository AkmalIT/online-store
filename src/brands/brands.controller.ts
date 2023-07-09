import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTypeDto } from 'src/types/dto/create-type.dto';
import { BrandsService } from './brands.service';

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
